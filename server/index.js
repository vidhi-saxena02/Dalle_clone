import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "../server/mongodb/connect.js";

const PORT = 3000;

dotenv.config();

const app = express();
app.use(cors());

app.use(
  express.json({
    limit: "50mb",
  })
);

app.get("/", async (req, res) => {
  res.send("Helloooo");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("Listening.....");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
