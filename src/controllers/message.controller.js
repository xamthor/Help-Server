import debug from "debug";
import { ApplicationError, NotFoundError } from "../helpers/errors";
import Message from "../models/message.model";

const DEBUG = debug("dev");

export default {
  create: async (req, res) => {
    // Validate request
    if(!req.body.message) {
        return res.status(400).send({
            message: "message content can not be empty"
        });
    }
    const message = new Message({
      conversation_id: req.body.conversation_id,
        user_id: req.user.id,
        message: req.body.message,
    });

    message.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Status."
        });
    });
},
};