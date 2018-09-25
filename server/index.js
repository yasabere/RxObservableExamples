import express from "express";
import serverRenderer from "./middleware/renderer";
import logger from "morgan";

const PORT = 2023;
const path = require("path");

const app = express();
const router = express.Router();

router.use(logger("default"));

router.use("^/$", serverRenderer);

router.use(
  express.static(path.resolve(__dirname, "..", "build"), {
    // maxAge: "0",
  })
);

router.use("/", serverRenderer);

app.use(router);

app.listen(PORT, error => {
  if (error) {
    return console.log("something bad happened", error);
  }

  console.log("listening on " + PORT + "...");
});
