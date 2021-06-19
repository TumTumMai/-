const Item = require('../models/Item.model');
const mongoose = require("mongoose");
const fs = require('fs')
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');
const { query } = require('express');
const { image, item } = require('../models/index.js');
const { paginatedResults } = require('../middlewares/pagination.js');
const { Console } = require('console');
// const uploadDir = './uploads';

// fs.ensureDirSync(uploadDir)

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if (!req.body.ItemName) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const item = new Item({
        ItemName: req.body.ItemName || "Untitled Note",
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        IdBooth: req.body.IdBooth


    });

    // Save Note in the database
    item.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};


////////////////////////////////เเสดงวัน
// exports.getall = async (req, res) => {
//     const today = new Date();
//     const todayString = today.toString();
//     req.query.match = { Event_Start: { $gt: todayString } }
//     // let data = await Image.find(req.query.match);
//     let data = await paginatedResults(Image, req)

//     const Events = data.itemsList
//     const EventToday = Events.filter(event => {
//         const D = event.Event_Start.getDate();

//         if (today.getDate() === D) {
//             return event;
//         }
//     })

//     const incommingEvents = Events.filter(event => {
//         return !EventToday.includes(event)
//     })

//     const responseData = {
//         EventToday,
//         incommingEvents,
//     }

//     res.send(responseData);

//     // data = await paginatedResults(Image, req)
//     // res.send(data);

// }





// Retrieve and return all notes from the database.
exports.findAll = async (req, res) => {
    const search = (req.query.search)
    const ItemBasket = (req.query.item_basket)
    const nopaginate = (req.query.nopaginate)
    // console.log(ItemBasket);
    // console.log(search);
    let data

    if (ItemBasket) {
        // let item = JSON.parse(ItemBasket)
        // console.log(item);
        // let item = ItemBasket.replace(/'/g, '"')
        // let item = [];
        let item = JSON.parse(ItemBasket, true)
        // console.log(item);
        item = item.replace(/[\[\]\']/g, '');
        // console.log(item);
        item = item.split(',');
        // console.log(item);
        // item = JSON.parse(item, true);
        item = item.map(x =>
            mongoose.Types.ObjectId(x)
        )



        data = await Item.find(
            {
                '_id': {
                    $in: item
                }
            });

    } else if (search) {

        data = Item.find({ $or: [{ 'ItemName': { $regex: '.*' + search + '.*' } }] }
            , (err, result) => {

                console.log(result);
                res.send(result)

            }


        );

    }

    else if (nopaginate) {
        console.log('55555', nopaginate);

        let data = await Item.find({});
        console.log(data, 66666);

        await res.send(data);

    }

    else {
        data = await paginatedResults(Item, req)
        // await console.log(data);
        // await res.send(data);
    }

    await res.send(data);

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
    Item.findById(req.params.id).populate("mini")
        .then(item => {
            if (!item) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.BoothName
                });
            }
            res.send(item);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.BoothName
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.BoothName
            });
        });
};


// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.ItemName) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    console.log(req.body.BoothName);
    Item.findByIdAndUpdate(req.params.ObjectId,

        {
            ItemName: req.body.ItemName || "Untitled Note",
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            // IdBooth: req.body.IdBooth

        }, { new: true })
        .then(item => {
            if (!item) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.BoothName
                });
            }
            res.send(item);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.BoothName
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.BoothName
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
    Item.findOne({ ItemName: `${req.params.ItemName}` })
        .then(async result => {
            console.log(result);
            // console.log(result.image);
            const img = result.image
            await Item.findByIdAndRemove(result._id).catch(err => {
                console.log(err);
            })
            img.forEach(element => {
                console.log(element)
                const curPath = path.join('uploads', `${element}`);
                console.log(curPath);
                fs.unlinkSync(curPath)
            });
            // const curPath = path.join('uploads', `${req.params.BoothName}`);
            // console.log(curPath);
            // fs.unlinkSync(curPath)
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