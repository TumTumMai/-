const jwt = require('jsonwebtoken')
const config = require('../controller/config/auth.config')
const db = require('../models')
const User = db.user
const Role = db.role

verifyToken = (req, res, next) => {
    let token = req.headers['authorization'].replace('Bearer ', '')
    console.log('ssss', req.headers)
    if (!token) {
        return res.status(403).send({ message: 'No token provided!' })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized!' })
        }
        console.log('sss', decoded)
        req.user = decoded
        req.userId = decoded.id
        next()
    })
}

isAdmin = (req, res, next) => {
    console.log('asd', req.userId)
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }

        Role.find(
            {
                _id: { $in: user.roles },
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err })
                    return
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'admin') {
                        next()
                        return
                    }
                }

                res.status(403).send({ message: 'Require Admin Role!' })
                return
            }
        )
    })
}

isModerator = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }

        Role.find(
            {
                _id: { $in: user.roles },
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err })
                    return
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'moderator') {
                        next()
                        return
                    }
                }

                res.status(403).send({ message: 'Require Moderator Role!' })
                return
            }
        )
    })
}

isAdmin_Moderator = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }

        Role.find(
            {
                _id: { $in: user.roles },
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err })
                    return
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'admin' || roles[i].name === 'moderator') {
                        next()
                        return
                    }
                }

                res.status(403).send({ message: 'Require Admin||Moderator Role!' })
                return
            }
        )
    })
}

const authJwt = {
    verifyToken,
    isAdmin,
    isModerator,
    isAdmin_Moderator
}
module.exports = authJwt
