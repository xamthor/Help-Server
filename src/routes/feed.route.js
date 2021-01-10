import { Router } from "express";
import feedController from "../controllers/feed.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";

const { feed } = feedController;
const { authenticate } = authentication;

const feedRouter = Router();

feedRouter.get("/all", authenticate, catchAsync(feed));

export default feedRouter;