import { Router } from "express";
import profileController from "../controllers/profile.controller";
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
const { update } = profileController;
const { authenticate } = authentication;

const profileRouter = Router();
profileRouter.use(cors(corsOptions));
profileRouter.post("/update", authenticate, catchAsync(update));

export default profileRouter;