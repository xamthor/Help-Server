import { Router } from "express";
import feedController from "../controllers/feed.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";
import cors from "cors";

const corsOptions = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
}

const { feed } = feedController;
const { authenticate } = authentication;

const feedRouter = Router();
feedRouter.use(cors(corsOptions));
feedRouter.get("/all", authenticate, catchAsync(feed));

export default feedRouter;