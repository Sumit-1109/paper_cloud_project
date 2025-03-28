const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./connectDB/connectDB");
const formROutes = require("./routes/form.route");

const app = express();

app.use(express.json());
dotenv.config();
app.use(bodyParser.json());

app.use(cors({
    origin: 'https://papercloud-form-frontend.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

const PORT = process.env.PORT || 8000;

app.use('/api/form', formROutes);

connectDB().then(() => {
    app.listen(PORT, (err) => {
        if(err) {
            console.log(err);
        }
        console.log(`Server is running successfully on port : ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
})