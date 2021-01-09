import passport from "passport";
import debug from "debug";
import passportLocal from "../services/passport/passport-local";
import { ApplicationError, NotFoundError } from "../helpers/errors";

const DEBUG = debug("dev");

export default {
  open: async (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        message: "open con success",
      },
    });
  },
  close: async (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        message: "close con success",
      },
    });
  }
};