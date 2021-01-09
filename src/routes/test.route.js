import { Router } from "express";
import testController from "../controllers/test.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";

const { open, close } = testController;
const { authenticate } = authentication;

const testRouter = Router();

testRouter.get("/open", catchAsync(open));
testRouter.get("/close", authenticate, catchAsync(close));

export default testRouter;