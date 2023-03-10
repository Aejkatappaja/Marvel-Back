const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const charactersRoute = require("./routes/characters");
const comicsRoute = require("./routes/comics");

app.use(express.json());
app.use(cors());
app.use(charactersRoute);
app.use(comicsRoute);

app.get("/", (req, res) => {
  res.json("WELCOME HERE !");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: " Wrong Way !" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started 🧉");
});
