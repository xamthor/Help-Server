import { Router } from "express";
import statusController from "../controllers/status.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";
import cors from "cors";

const { create, latest, all } = statusController;
const { authenticate } = authentication;

const testRouter = Router();

const corsOptions = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
}

testRouter.use(cors(corsOptions))

testRouter.get("/all", authenticate, catchAsync(all));
testRouter.post("/create", authenticate, catchAsync(create));
testRouter.get("/latest", authenticate, catchAsync(latest));

export default testRouter;