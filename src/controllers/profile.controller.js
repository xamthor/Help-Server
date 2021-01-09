import debug from "debug";
import { ApplicationError, NotFoundError } from "../helpers/errors";

import User from "../models/user.model";

const DEBUG = debug("dev");

export default {
  update: async (req, res) => {
    User.find({ _id: req.user.id }).limit(1).update(req.body)
    .then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving status."
        });
    });
},

};