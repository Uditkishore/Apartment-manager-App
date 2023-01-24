require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./db/db");
const app = express();

// import custom middleware
const { validateRegistration, validateLogin } = require('./middlewares/validateLogger');

// middleware
app.use(express.json());
app.use(cors());


// import Controllers
const { register, login } = require("./Controllers/Auth.Controller");
const residentController = require("./Controllers/Resident.Controller");
const flatController = require("./Controllers/Flat.Controller");


// requests Auth
app.post("/register", validateRegistration, register);
app.post("/login", validateLogin, login);

// request Flat
app.get('/', (req, res) => {
  res.send("Welcome to Homepage, Routes :- '/resident' for users and '/flat' for posts")
})

app.use("/resident", residentController);
app.use("/flat", flatController);

// db connect
connect();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
