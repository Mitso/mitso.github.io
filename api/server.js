const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let users = [];

app.get("/", (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    );
});

app.post("/api", (req, res) => {
    if (!req.body.phone) {
        return res.status(400).json({
            status: "error",
            error: "req body cannot be empty",
        });
    }
    users.push(req.body);
    res.status(200).json({
        data: req.body
    });
});

app.get("/users", (req, res) => {
    res.json(users);
});


app.listen(9200, () => {
    console.log("Backend Express webserver listening to 9200");
});