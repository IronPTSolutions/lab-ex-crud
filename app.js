const express = require("express");
const logger = require("morgan");

const app = express();

/** Configs */
require("./config/hbs.config");
require("./config/db.config");

app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");

/** Middlewares */
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.static(`${__dirname}/public`))

const routes = require("./config/routes.config");
app.use("/", routes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application listen at port ${port}`));
