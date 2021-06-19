const Video = require('../models/video.model.js');
const fs = require('fs')
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');
const { query } = require('express');
const { video } = require('../models/index.js');
const { paginatedResults } = require('../middlewares/pagination.js');
const { Console } = require('console');
// const uploadDir = './uploads';

// fs.ensureDirSync(uploadDir)

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if (!req.body.videoname) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const video = new Video({
        videoname: req.body.videoname || "Untitled Note",
        address: req.body.address,
        image: req.body.image

    });

    // Save Note in the database
    video.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

// Retrieve and return all notes from the database.
exports.findAll = async (req, res) => {
    const search = (req.query.search)
    console.log(search);
    //let www
    if (search) {

        const www = Video.find({ $or: [{ 'videoname': { $regex: '.*' + search + '.*' } }, { 'address': { $regex: '.*' + search + '.*' } }] }
            , (err, result) => {

                console.log(result);
                res.send(result)

            }


        );

    }
    else {
        const data = await paginatedResults(Video, req)
        await console.log(data);
        await res.send(data);
    }

    // Video.find()
    // .then(video => {
    //     res.send(video);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while retrieving notes."
    //     });
    // });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Video.findOne({ videoname: req.params.videoname })
        .then(video => {
            if (!video) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.videoname
                });
            }
            res.send(video);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.videoname
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.videoname
            });
        });
};


// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.videoname) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    console.log(req.body.videoname);
    Video.findByIdAndUpdate(req.params.ObjectId,

        {
            videoname: req.body.videoname || "Untitled Note",
            address: req.body.address,
            image: req.body.image

        }, { new: true })
        .then(video => {
            if (!video) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.videoname
                });
            }
            res.send(video);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.videoname
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.videoname
            });
        });
};
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body.videoname) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }
//     console.log(req.body.videoname);
//     // Find note and update it with the request body
//     Video.findByIdAndUpdate(req.params.ObjectId, {
//         videoname: req.body.videoname || "Untitled Note",
//         address: req.body.address
//     }, { new: true })
//         .then(video => {
//             if (!video) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.videoname
//                 });
//             }
//             res.send(video);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.videoname
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error updating note with id " + req.params.videoname
//             });
//         });
// };

// Delete a note with the specified noteId in the request
exports.delete = async (req, res) => {
    console.log(req.params)
    Video.findOne({ videoname: `${req.params.videoname}` })
        .then(async result => {
            console.log(result);
            console.log(result._id);
            await Video.findByIdAndRemove(result._id).catch(err => {
                console.log(err);
            })
            const curPath = path.join('uploads', `${req.params.videoname}`);
            console.log(curPath);
            fs.unlinkSync(curPath)
            return res.send({ message: "Note deleted successfully!" });
        })
    // const curPath = path.join('uploads',`${req.query.img }`);
    // console.log(curPath);
    //  fs.unlinkSync(curPath)
    //  return res.send({message: "Note deleted successfully!"});
    //  await Video.findByIdAndRemove(req.params.videoname)
    // .then(video => {
    //     console.log()
    //     if(!video) {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.videoname
    //         });
    //     }
    //     res.send({message: "Note deleted successfully!"});
    // }).catch(err => {
    //     if(err.kind === 'ObjectId' || err.name === 'NotFound') {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.videoname
    //         });                
    //     }
    //     return res.status(500).send({
    //         message: "Could not delete note with id " + req.params.videoname
    //     });
    // });
};