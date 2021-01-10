import debug from "debug";
import { ApplicationError, NotFoundError } from "../helpers/errors";
import Connection from "../models/connection.model";
import Status from "../models/status.model";

const DEBUG = debug("dev");

export default {
  feed: async (req, res) => {

  	let connections = await Connection.find({ user_id: req.user.id })
    .then(data => {
    	return data;
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the feed."
        });
    });
    
    let feed = [];

    for(let data of connections){
    	let statusdata = await Status.find({ user_id: data.connection_user}).populate('user_id').sort({$natural:-1})
	    .then(data => {
    		return data;
	    }).catch(err => {
	      res.status(500).send({
	            message: err.message || "Some error occurred while retrieving the feed."
	        });
	    });
	    feed.push(statusdata);
    }

    res.status(200).json({
      status: "success",
      data:  feed,
    });
  },
};