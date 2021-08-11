const express = require("express"),
    history = require("connect-history-api-fallback"),
    cors = require("cors"),
    dotenv = require("dotenv"),
    mongoose = require("mongoose"),
    morgan = require("morgan"),
    config = require("./api/config/db"),
    routes = require("./api/routes");


dotenv.config();

const app = express();
const port = process.env.PORT;
const staticFileMiddleware = express.static(`${__dirname}/dist`);
app.use(staticFileMiddleware);

const corsOptions = {
    origin: "http://localhost:9100"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//ROUTES
app.use("/api", routes);

//DB
mongoose.set("useCreateIndex", true);
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB Connected…");
  })
  .catch(err => console.log(err));

//ROUTES


app.use(history({
    disableDotRule: true,
    verbose: true
}));

app.use(staticFileMiddleware);

app.listen(port, () => {
    console.log(`API Express webserver listening to ${port}`);
});
