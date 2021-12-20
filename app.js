const express = require("express");
const whrx = express();
require('dotenv').config()
const port = process.env.PORT || 9001;
var cors = require("cors");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB ..."))
  .catch((err) => console.error("Could not connect to MongoDB:‌", err));

const allowedOrigins = [
    "http://localhost:4200",
    "http://localhost:4021",
    "http://127.0.0.1:5500",
    "http://127.0.0.1:5500",
    "https://iwms.securisk.in",
    "https://eiwms.securisk.in",
    "https://app.securisk.in"
];
whrx.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                const msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(msg, false);
            }
            return callback(null, true);
        },
    })
);
whrx.use(express.json());

const mainRouter = require("./main.router");

whrx.use('/api/v1',mainRouter)


whrx.get("/api", (req, res) => {
    res.send("I am working");
});
whrx.listen(port, () => {
    console.log("server up and running on PORT :", port);
});

