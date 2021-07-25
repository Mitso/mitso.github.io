const express = require("express"),
    cors = require("cors"),
    app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    );
});

app.post("/api", (req, res) => {
    res.send([{
        username: req.body.username,
        fullname: req.body.fullname,
        clan: req.body.clan
    }]);

    console.log("Got body:", req.body);

    res.redirect("/");
    res.sendStatus(200);
});


app.listen(9200, () => {
    console.log("Backend Express webserver listening to 9200");
});