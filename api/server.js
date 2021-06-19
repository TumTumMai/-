const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
// const wedrtc = require('webrtc');

//const fs = require('fs')

const app = express()

var corsOptions = {
    origin: 'http://localhost:8081',
}

app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./app/models')
const User = require('./app/models/user.model')
const Role = db.role

db.mongoose
    .connect(
        `mongodb+srv://root:@123456@cluster0.gvdo1.mongodb.net/<dbname>?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
    )
    .then(() => {
        console.log('Successfully connect to MongoDB.')
        initial()
    })
    .catch((err) => {
        console.error('Connection error', err)
        process.exit()
    })

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: 'user',
            }).save((err) => {
                if (err) {
                    console.log('error', err)
                }

                console.log("added 'user' to roles collection")
            })

            new Role({
                name: 'moderator',
            }).save((err) => {
                if (err) {
                    console.log('error', err)
                }

                console.log("added 'moderator' to roles collection")
            })

            new Role({
                name: 'admin',
            }).save((err) => {
                if (err) {
                    console.log('error', err)
                }

                console.log("added 'admin' to roles collection")
            })
        }
    })
}

// //เรียกไงไม่รู้ youtube พักไว้ก่อนอันนี้
//   //const express = require('express');
//     router = express.Router(),
//    Youtube = require("youtube-api"),
//    fs = require('fs'),

// router.get('/insert', function(req, res, next) {
//     Youtube.authenticate({
//         type: "oauth"
//       , token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxZ9F0sVpqEXh"
//     });

//     var req = Youtube.videos.insert({
//         "resource": {
//             // Video title and description
//             "snippet": {
//                 "title": "Test",
//                 "description": "Test video upload via YouTube API"
//             },
//             "status": {
//                 "privacyStatus": "private"
//             }
//         },
//         "part": "snippet,status,id",
//         "media": {
//             "body": fs.createReadStream('./test.mp4')
//         }
//     }, function (err, data) {
//         console.log(err);

//         // insert to playlist
//         Youtube.playlistItems.insert({
//             "resource": {
//                 "snippet": {
//                     "playlistId": "xxxxxxxxxxxxxxxxxxxgvjIu",
//                     "resourceId": {
//                       "kind": "youtube#video",
//                       "videoId": data.id // ???
//                     }
//                 },
//                 "status": {
//                     "privacyStatus": "private"
//                 }
//             }

//         }, function (err, data) {
//             if (err) {
//                 return console.log(err);
//             }
//         });
//     });

//     res.json();
// });

//อันนี้ระเบิด
//var app = express()
// app.use(
//   multer({
//     dest: __dirname + '/uploads/',
//     rename: function (fieldname, filename) {
//       return Date.now()
//     },
//     limits: {
//       fileSize: 100000
//     },
//     onFileSizeLimit: function (file) {
//       console.log('Failed: ' + file.originalname + ' is limited')
//       fs.unlink(file.path)
//     }
//   })
// )
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html')
// })
// app.post('/upload', function (req, res) {
//   res.send(req.files)
// })

// ลอง upload
//var express = require('express')
//var app = express()
//var multer  = require('multer')

const { verifyToken } = require("./app/middlewares/authJwt");
const { isAdmin } = require("./app/middlewares/authJwt");
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    },
})

var upload = multer({ storage: storage })
app.post('/uploadfile', verifyToken, isAdmin, upload.array('myFile'), (req, res, next) => {
    const file = req.files
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    console.log(file);
    res.send(file)

})

////Dowload
// app.get('/download', function (req, res) {
//   const file = `${__dirname}/uploads/myFile-1602473316507.png`;
//   console.log(file)
//   res.download(file); // Set disposition and send it.
// });

app.get('/download/:myFileUpload', (req, res) => {
    var file = req.params.myFileUpload
    var fileLocation = path.join('./uploads', file)
    console.log(fileLocation)
    res.download(fileLocation, file)
})

////ลองCodeRtc
// app.get('/rtc', (req, res) => {
//   const constraints = {
//     'video': true,
//     'audio': true
//   }
//   wedrtc.mediaDevices.getUserMedia(constraints)
//     .then(stream => {
//       console.log('Got MediaStream:', stream);
//     })
//     .catch(error => {
//       console.error('Error accessing media devices.', error);
//     });
// });
//ใช้ได้เเต่ยังไม่ครบ
// var upload = multer()
// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   console.log(req)
//   res.json({ message: "successfully to upload." });
// })

// var ObjectId = require('mongoose').Types.ObjectId;
// var objId = new ObjectId((param.length < 12) ? "123456789012" : param);
// You should make string 'param' as ObjectId type. To avoid exception,
// the 'param' must consist of more than 12 characters.
// const query = 'aaaaa'
// User.find({ $or: [{ '_id': query }, { 'name': query }, { 'nickname': query }] },
//   function (err, docs) {
//     if (!err) res.send(docs);
//   });

// Define the static file path
//showimg
app.use('/uploads', express.static(__dirname + '/uploads'))
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// })

//require('./app/routes/video.routes')(app);

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Love Candy.' })
})
// routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)
// Require Notes routes
require('./app/routes/Event.routes')(app);
require('./app/routes/image.routes')(app);
require('./app/routes/categorise.routes')(app);
require('./app/routes/booth.routes')(app);
require('./app/routes/brochure.routes')(app);
require('./app/routes/item.routes')(app);
require('./app/routes/basket.routes')(app);
//ใช้เเต่แก้หน่อย
// app.get('/:room', (req, res) => {
//   res.render('room', { roomId: req.params.room })
// })

// io.on('connection', socket => {
//   socket.on('join-room', (roomId, userId) => {
//     socket.join(roomId)
//     socket.to(roomId).broadcast.emit('user-connected', userId)

//     socket.on('disconnect', () => {
//       socket.to(roomId).broadcast.emit('user-disconnected', userId)
//     })
//   })
// })

// // const http = require('http')
// // const server = http.createServer(app)
// // const io = require('socket.io')(server)
// app.use(express.static(__dirname + '/public'))

// const http = require("http");
// const server = http.createServer(app);
// const io = require("socket.io")(server);
// app.use(express.static(__dirname + "/public"));

// io.sockets.on("error", e => console.log(e));
// io.sockets.on("connection", socket => {
//   socket.on("broadcaster", () => {
//     broadcaster = socket.id;
//     socket.broadcast.emit("broadcaster");
//   });
//   socket.on("watcher", () => {
//     socket.to(broadcaster).emit("watcher", socket.id);
//   });
//   socket.on("offer", (id, message) => {
//     socket.to(id).emit("offer", socket.id, message);
//   });
//   socket.on("answer", (id, message) => {
//     socket.to(id).emit("answer", socket.id, message);
//   });
//   socket.on("candidate", (id, message) => {
//     socket.to(id).emit("candidate", socket.id, message);
//   });
//   socket.on("disconnect", () => {
//     socket.to(broadcaster).emit("disconnectPeer", socket.id);
//   });
// });
// // server.listen(port, () => console.log(`Server is running on port ${port}`));

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

