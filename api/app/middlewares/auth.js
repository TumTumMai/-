// const jwt = require('./authJwt')
// const checkAuth = (req, res, next) => {
//     // if (process.env.NODE_ENV === 'development') return next()

//     let accessToken = null

//     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//         accessToken = req.headers.authorization.split(' ')[1]
//     } else if (req.query && req.query.accessToken) {
//         accessToken = req.query.accessToken
//     } else {
//         accessToken = req.body.accessToken
//     }

//     jwt.verify(accessToken).then(
//         decoded => {
//             req.decoded = decoded
//             next()
//         },
//         err => {
//             return res.send({
//                 status: false,
//                 code: HttpStatus.UNAUTHORIZED,
//                 error: HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
//             })
//         }
//     )
// }

// module.exports = { checkAuth }

