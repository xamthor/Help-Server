import debug from "debug";
import { ApplicationError, NotFoundError } from "../helpers/errors";
import User from "../models/user.model";

const DEBUG = debug("dev");

export default {
  search: async (req, res) => {

    const query = User.searchBuilder(req.query.s);
    User.find(query).limit(10)
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving search results."
        });
    });

  },
};