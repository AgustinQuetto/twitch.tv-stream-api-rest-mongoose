//express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const routes = require("./routes");
//mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/twitch", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
routes(app);

app.listen(port, () => {
    console.log("El servidor ha iniciado");
});
