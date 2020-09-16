require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 80;
const app = express();

// Routes
const mainRoute = require("./routes/main");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public/'));
app.set("view engine", "ejs");
app.set("views", "views");
app.use("/", mainRoute);

mongoose.connect(process.env.DB_DOCKER, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("DB --> OK");
    })
    .catch(e => {
        console.log("DB --> ERROR");
        console.log(e);
    })

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});

app.get("*", (req, res) => {
    res.send("Not found").sendStatus(404);
})
