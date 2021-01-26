import express from "express";
import logger from "morgan";
import { config } from "dotenv";
import passport from 'passport';
import cookieParser from 'cookie-parser';
import errorHandler from "./middleware/errorHandler";
import { NotFoundError } from "./helpers/errors";
import authRouter from "./routes/auth.route";
import statusRouter from "./routes/status.route";
import profileRouter from "./routes/profile.route";
import searchRouter from "./routes/search.route";
import messageRouter from "./routes/message.route";
import conversation from "./routes/conversation.route";
import connection from "./routes/connection.route";
import feedRouter from "./routes/feed.route";

import cors from "cors";

config()

const app = express();

if (["development", "production"].includes(process.env.NODE_ENV)) {
  app.use(logger("dev"));
}
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

passport.initialize()

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/status', statusRouter);
app.use('/message', messageRouter);
app.use('/conversation', conversation);
app.use('/connection', connection);
app.use('/feed', feedRouter);
app.use('/', searchRouter);

app.get("/", (_, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome",
  });
});

app.all("*", (_, res) => {
  throw new NotFoundError('Resource not found on this server')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

export default app;