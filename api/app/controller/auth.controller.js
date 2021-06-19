const config = require('../controller/config/auth.config')
const db = require('../models')
const User = db.user
const Role = db.role
const nodemailer = require('nodemailer')
const validateRegistry = require('./validate').validateRegistry

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

exports.signup = async (req, res) => {
    console.log('uhuhuhuh', req.body)
    const user = new User({
        username: req.body.username,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        birthday: req.body.birthday,
        address: req.body.address
    })

    // check password
    const err = validateRegistry(req.body)
    console.log('1', err.length)
    console.log('2', err)
    const resultErr = await err
    if (resultErr.length) {
        return res.status(400).send(err)
    }

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'tyrandzaza123@gmail.com', // generated ethereal user
            pass: 'gc742899', // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    })
    let mailOptions = {
        from: '“Sad 👻” <foo@example.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: `กดเพื่อยืนยังตัวตน  <a href='http://localhost:3002/verifyRegister?${req.body.email}'> http://localhost:3002/verifyRegister?${req.body.email} </a>`, // html body
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
    })

    user.save((err, user) => {
        console.log(err)
        if (err) {
            res.status(500).send({ message: err })
            return err
        }

        // if(req.body.password !== req.body.confrimpassword)
        //   {
        //     res.send({ message: "User was Not pass con!" });
        //   }

        if (req.body.roles) {
            Role.find(
                {
                    name: { $in: req.body.roles },
                },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ message: err })
                        return
                    }

                    user.roles = roles.map((role) => role._id)
                    user.save((err) => {
                        if (err) {
                            res.status(500).send({ message: err })
                            return
                        }

                        res.send({
                            message: 'User was registered successfully!',
                        })
                    })
                }
            )
        } else {
            Role.findOne({ name: 'user' }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err })
                    return
                }

                user.roles = [role._id]
                user.save((err) => {
                    if (err) {
                        res.status(500).send({ message: err })
                        return
                    }

                    res.send({ message: 'User was registered successfully!' })
                })
            })
        }
    })
}

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email,
    })
        .populate('roles', '-__v')
        .exec((err, user) => {
            // console.log('asd', user._id)
            if (err) {
                res.status(500).send({ message: err })
                return
            }

            if (!user) {
                return res.status(404).send({ message: 'User Not found.' })
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            )

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: 'Invalid Password!',
                })
            }


            var authorities = []

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push('ROLE_' + user.roles[i].name.toUpperCase())
            }
            // console.log('ไม่ไหว', user)
            const userStr = JSON.stringify(user)
            const userObj = JSON.parse(userStr)
            const payload = {
                id: user._id,
                username: user.username,
                email: user.email,
                roles: authorities,
                idbooth: userObj.idbooth,
            }
            // console.log('ssss', payload)
            var token = jwt.sign(payload, config.secret, {
                expiresIn: 86400, // 24 hours
            })

            // var authorities = [];

            // for (let i = 0; i < user.roles.length; i++) {
            //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            // }
            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                idbooth: userObj.idbooth,
                roles: authorities,
                accessToken: token,
                // status: user.Status
            })
        })
}

exports.signinFacebook = async (req, res) => {
    console.log('xxx', req.body)
    User.findOne({
        email: req.body.email,
    })
        .populate('roles', '-__v')
        .exec((err, user) => {
            console.log('zzz')
            if (!user) {
                console.log('yyyy')
                const user = new User({
                    id: req.body.id,
                    name: req.body.name,
                    email: req.body.email,
                    // password: bcrypt.hashSync(req.body.password, 8),
                    // birthday: req.body.birthday
                })

                user.save((err, user) => {
                    console.log(err)
                    if (err) {
                        res.status(500).send({ message: err })
                        return err
                    }

                    if (req.body.roles) {
                        Role.find(
                            {
                                name: { $in: req.body.roles },
                            },
                            (err, roles) => {
                                if (err) {
                                    res.status(500).send({ message: err })
                                    return
                                }

                                user.roles = roles.map((role) => role._id)
                                user.save((err) => {
                                    if (err) {
                                        res.status(500).send({ message: err })
                                        return
                                    }

                                    res.send({
                                        message:
                                            'User was registered successfully!',
                                    })
                                })
                            }
                        )
                    } else {
                        Role.findOne({ name: 'user' }, (err, role) => {
                            if (err) {
                                res.status(500).send({ message: err })
                                return
                            }

                            user.roles = [role._id]
                            user.save((err) => {
                                if (err) {
                                    res.status(500).send({ message: err })
                                    return
                                }

                                res.send({
                                    message:
                                        'User was registered successfully!',
                                })
                            })
                        })
                    }
                })
            } else {
                var authorities = []

                for (let i = 0; i < user.roles.length; i++) {
                    authorities.push('ROLE_' + user.roles[i].name.toUpperCase())
                }

                const payload = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    roles: authorities,

                }
                var token = jwt.sign(payload, config.secret, {
                    expiresIn: 86400, // 24 hours
                })

                console.log('ไม่ไหว', user)
                res.status(200).send({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    roles: authorities,
                    accessToken: token,
                    idbooth: user.idbooth,
                    // status: user.Status
                })
            }
        })
}
