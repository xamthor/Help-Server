import { Router } from "express";
import conversationController from "../controllers/conversation.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";

const { create } = conversationController;
const { authenticate } = authentication;

const conversationRouter = Router();

conversationRouter.get("/create", authenticate, catchAsync(create));

export default conversationRouter;