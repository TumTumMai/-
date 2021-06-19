const Event = require('../models/Event.model.js');
const fs = require('fs')
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');
const { query } = require('express');
//const uploadDir = './uploads';
const { paginatedResults } = require('../middlewares/pagination.js');

// fs.ensureDirSync(uploadDir)

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Nameevent) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }


    // Create a Note
    const event = new Event({
        DMY: req.body.DMY || "Untitled Note",
        Timestar: req.body.Timestar,
        Timeend: req.body.Timeend,
        View: req.body.View,
        Nameevent: req.body.Nameevent,
        Content: req.body.Content,
        image: req.body.image
    });

    // Save Note in the database
    event.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};



exports.findAll = async (req, res) => {
    const search = (req.query.search)
    console.log(search);
    //let www
    if (search) {

        const www = Event.find({
            $or: [{ 'DMY': { $regex: '.*' + search + '.*' } },
            { 'Timestar': { $regex: '.*' + search + '.*' } },
            { 'DMY': { $regex: '.*' + search + '.*' } },
            { 'Timeend': { $regex: '.*' + search + '.*' } },
            { 'Nameevent': { $regex: '.*' + search + '.*' } },
            { 'Content': { $regex: '.*' + search + '.*' } },
            { 'image': { $regex: '.*' + search + '.*' } }
            ]
        }
            , (err, result) => {

                console.log(result);
                res.send(result)

            }


        );

    }

    else {
        const data = await paginatedResults(Event, req)
        await console.log(data);
        await res.send(data);
    }
};

exports.findOne = (req, res) => {
    Event.findOne({ Nameevent: req.params.Nameevent })
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.Nameevent
                });
            }
            res.send(event);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.Nameevent
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.Nameevent
            });
        });
};






exports.update = (req, res) => {
    // Validate Request
    if (!req.body.Nameevent) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    console.log(req.body.Nameevent);
    Event.findByIdAndUpdate(req.params.ObjectId,

        {
            DMY: req.body.DMY || "Untitled Note",
            Timestar: req.body.Timestar,
            Timeend: req.body.Timeend,
            View: req.body.View,
            Nameevent: req.body.Nameevent,
            Content: req.body.Content,
            image: req.body.image

        }, { new: true })
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.Nameevent
                });
            }
            res.send(event);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.Nameevent
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.Nameevent
            });
        });
};


exports.delete = async (req, res) => {

    await Event.findOne({ Nameevent: `${req.params.Nameevent}` })
        .then(reslue => {
            console.log(reslue);
            if (!reslue) {
                return res.status(404).send({
                    message: "Note not found "
                });


            }

            reslue.remove()

            return res.status(200).send({
                message: "ok "
            });

        })

        .catch(err => {
            console.log(err);
        })

};

