import mongoose from "mongoose";
import { config } from "dotenv";
import validator from "validator";

config();

const conversationSchema = new mongoose.Schema({
  users:[{
        user: { type:mongoose.Schema.Types.ObjectId, ref:'User', required:true }
    },{
        user: { type:mongoose.Schema.Types.ObjectId, ref:'User', required:true }
    }],
  timestamp:{
  	type: Date, 
  	default: Date.now
  }

});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
