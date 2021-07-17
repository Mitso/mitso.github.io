const dotenv = require("dotenv");
const history = require("connect-history-api-fallback");
const express = require("express");

const server = express();

dotenv.config();

const port = process.env.PORT;

const staticFileMiddleware = express.static(`${__dirname}/dist`);

server.use(staticFileMiddleware);

server.use(history({
  disableDotRule: true,
  verbose: true
}));

server.use(staticFileMiddleware);


server.listen(port, () => {
    console.log(`Express webserver listening to ${port}`);
});

