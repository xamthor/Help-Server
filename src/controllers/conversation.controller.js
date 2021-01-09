import debug from "debug";
import { ApplicationError, NotFoundError } from "../helpers/errors";
import Conversation from "../models/conversation.model";

const DEBUG = debug("dev");

export default {
	create: async (req, res) => {
    // Validate request
    if(!req.user.id) {
        return res.status(400).send({
            message: "user can not be empty"
        });
    }
    const conversation = new Conversation({
    	users:[ { user: req.user.id  }, { user: req.user.id  }] ,
    });
    conversation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Status."
        });
    });
},
};