const express = require("express");
const ViteExpress = require("vite-express");
const connectDB = require('./config/database');


const app = express();

require('dotenv').config({path: './config/.env'});

connectDB();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!');
});