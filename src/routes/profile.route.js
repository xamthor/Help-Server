import { Router } from "express";
import profileController from "../controllers/profile.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";

const { update } = profileController;
const { authenticate } = authentication;

const profileRouter = Router();

profileRouter.post("/update", authenticate, catchAsync(update));

export default profileRouter;