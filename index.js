const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    dotenv = require("dotenv"),
    history = require("connect-history-api-fallback"),
    mongoose = require("mongoose"),
    morgan = require("morgan"),
    config = require("./config/db");

dotenv.config();

const app = express();
const port = process.env.PORT;
const staticFileMiddleware = express.static(`${__dirname}/dist`);
app.use(staticFileMiddleware);

app.use(history({
    disableDotRule: true,
    verbose: true
}));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//DEFINE ROUTES
app.get("/api", (req, res) => {
    res.send(
        [{
            title: "Hello!",
            description: "You are connected to the API"
        }]
    );
});
app.post("/signup", (req, res) => {
    if (!req.body.phone) {
        return res.status(400).json({
            status: "error",
            error: "req body cannot be empty",
        });
    }

    res.status(200).json({
        data: req.body
    });
});
app.get("/users", (req, res) => {
    //Needs to get record from DB
    res.send(
        [
            {
                phone: "Hello!",

            }
        ]
    );
});

app.listen(port, () => {
    console.log(`API Express webserver listening to ${port}`);
});