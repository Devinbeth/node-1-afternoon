/* jshint node: true */
const express = require("express");
const bodyParser = require("body-parser");
const mc = require("./controllers/messages_controller.js");
const app = express();
app.use(bodyParser.json());
app.use(express.static("../public/build"));

const url = "/api/messages";
app.post(url, mc.create);
app.get(url, mc.read);
app.put(`${url}/:id`, mc.update);
app.delete(`${url}/:id`, mc.delete);

const port = 3000;
app.listen(port, () => console.log(`Server is listening at ${port}`));
