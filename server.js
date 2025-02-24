require("dotenv").config();
const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.error("db error", error));
db.once("open", (error) => console.log("Connected to db"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");

app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("Server has started"));
