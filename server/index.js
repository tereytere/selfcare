const express = require("express");
const cors = require('cors');
const { connectDB } = require("./src/utils/db");
const env = require("dotenv");
env.config()

const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

connectDB();
const server = express();
const PORT = process.env.PORT;

server.use(express.json())
server.use(cors());

server.listen(PORT, () => {
    console.log(`listen port http://localhost:${PORT} `);
})
