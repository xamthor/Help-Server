import mongoose from "mongoose";
import { config } from "dotenv";
import validator from "validator";

config();

const messageSchema = new mongoose.Schema({

  conversation_id: {
    type: String,
  },
  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref:'User', required:true 
  },
  message: {
    type: String,
  },
  timestamp:{
  	type: Date, 
  	default: Date.now
  }

});

const Message = mongoose.model("Message", messageSchema);

export default Message;
