require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./db/db");
const app = express();
app.use(express.json());
app.use(cors());

// import Controllers
const residentController = require("./Routes/Resident.router");
const flatController = require("./Routes/Flat.router");

// Flat Methods
app.get('/', (req, res) => {
  res.send("Welcome to Homepage")
})

// Resident Methods
app.use("/residents", residentController);
app.use("/flats", flatController);

// db connect
connect();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
