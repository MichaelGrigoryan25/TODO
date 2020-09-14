require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 80;
const app = express();

// Routes
const mainRoute = require("./routes/main");

app.use(express.json());
app.use(express.static('public/'));
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", mainRoute);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
