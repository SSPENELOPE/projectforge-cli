const express = require('express');
const routes = require('./controllers');
const db = require('./config/connection');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

console.log("Server starting...");
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to db"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: '*'
}));

app.use(cookieParser());

app.use(routes);

module.exports = app;