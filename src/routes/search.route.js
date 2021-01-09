import { Router } from "express";
import searchController from "../controllers/search.controller";
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

const { search } = searchController;
const { authenticate } = authentication;

const searchRouter = Router();
searchRouter.use(cors(corsOptions));

searchRouter.get("/search", authenticate, catchAsync(search));

export default searchRouter;