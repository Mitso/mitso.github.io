const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    dotenv = require("dotenv"),
    history = require("connect-history-api-fallback"),
    routes = require("./routes");

const  app = express();
const port = process.env.PORT;
const staticFileMiddleware = express.static(`${__dirname}/dist`);

app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
}));

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes();

app.listen(port, () => {
    console.log(`API Express webserver listening to ${port}`);
});