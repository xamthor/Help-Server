import mongoose from "mongoose";
import { config } from "dotenv";
import validator from "validator";

config();

const connectionSchema = new mongoose.Schema({

  user_id: {
    type: String,
  },
  connection_user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref:'User', 
    required:true,
  },
  star: {
      type: Boolean,
      default: false
  },
  timestamp:{
  	type: Date, 
  	default: Date.now
  }

});

const Connection = mongoose.model("Connection", connectionSchema);

export default Connection;
