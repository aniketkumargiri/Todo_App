const express = require("express")
const mongoose = require("mongoose")

// app
const app = express()

// port
const port = 3000

// connection to mongodb
mongoose.connect("mongodb://localhost:27017/todoapp_express");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

// server configurations
app.listen(port, () => {
    console.log(`Todo App is running at http://localhost:${port}`);
});