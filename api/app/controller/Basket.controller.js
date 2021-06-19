const Basket = require('../models/Basket.model');
const fs = require('fs')
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');
const { query } = require('express');
const { basket } = require('../models/index.js');
const { paginatedResults } = require('../middlewares/pagination.js');
const { Console } = require('console');
// const uploadDir = './uploads';

// fs.ensureDirSync(uploadDir)

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if (!req.body.UserId) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const basket = new Basket({
        UserId: req.body.UserId,
        ItemId: req.body.ItemId,


    });

    // Save Note in the database
    basket.save()
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

        const www = Basket.find({ $or: [{ 'UserId': { $regex: '.*' + search + '.*' } }, { 'ItemId': { $regex: '.*' + search + '.*' } }] }
            , (err, result) => {

                console.log(result);
                res.send(result)

            }


        );

    }
    else {
        const data = await paginatedResults(Basket, req)
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
exports.findOne = async (req, res) => {

    const basket = await Basket.findById(req.params.id).populate('ItemId', 'ItemName price').populate('UserId', 'username email -_id')
        // .then(basket => {
        //     if (!basket) {
        //         return res.status(404).send({
        //             message: "Note not found with id " + req.params.Basket
        //         });
        // //     } console.log('asdf', basket)

        // //     res.send(basket);
        // })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.Basket
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.Basket
            });
        });

    let total = 0
    let Count = 0
    basket.ItemId.map(itemId => {
        total = total + itemId.price
        Count = Count + 1
    })
    const DataAll = {
        basket: basket,
        total: total,
        Count: Count

    }

    res.send(DataAll)

};


// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.UserId) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    console.log(req.body.UserId);
    Basket.findByIdAndUpdate(req.params.ObjectId,

        {

            ItemId: req.body.ItemId

        }, { new: true })
        .then(basket => {
            if (!basket) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.UserId
                });
            }
            res.send(basket);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.UserId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.UserId
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

    await Basket.findById(req.params.id)
        .then(reslue => {
            console.log(reslue);
            if (!reslue) {
                return res.status(404).send({
                    message: "Note not found "
                });


            }

            reslue.deleteOne()

            return res.status(200).send({
                message: "ok "
            });

        })

        .catch(err => {
            console.log(err);
        })

};
