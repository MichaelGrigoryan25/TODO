require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
const port = process.env.PORT || 80;
const app = express();

const mainRoute = require("./routes/main");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Successfully connected to the database"));

app.use(express.json());
app.use(express.static('public/'));
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", mainRoute);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});