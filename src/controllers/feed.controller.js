import debug from "debug";
import { ApplicationError, NotFoundError } from "../helpers/errors";

const DEBUG = debug("dev");

export default {
  feed: async (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        message: "open con success",
      },
    });
  },
};