import { Router } from "express";
import messageController from "../controllers/message.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";

const { create } = messageController;
const { authenticate } = authentication;

const messageRouter = Router();

messageRouter.get("/create", authenticate, catchAsync(create));
// testRouter.get("/create", authenticate, catchAsync(create));

export default messageRouter;