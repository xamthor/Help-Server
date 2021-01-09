import debug from "debug";
import { ApplicationError, NotFoundError } from "../helpers/errors";
import Status from "../models/status.model";

const DEBUG = debug("dev");

export default {
  create: async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Status content can not be empty"
        });
    }
    // Create a Status
    const status = new Status({
        user_id: req.user.id,
        content: req.body.content,
    });
    // Save Status in the database
    status.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Status."
        });
    });
},

latest: async (req, res) => {
    Status.find({ user_id: req.user.id }).populate('user_id').sort({$natural:-1}).limit(1)
    .then(status => {
        res.send(status);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving status."
        });
    });
},

all: async (req, res) => {
    Status.find({user_id: req.user.id}).populate('user_id').sort({$natural:-1}).limit(30)
    .then(status => {
        res.send(status);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving status."
        });
    });
},

};