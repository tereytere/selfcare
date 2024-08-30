const express = require("express");
const cors = require('cors');
const { connectDB } = require("./src/utils/db");
const userRouter = require("./src/api/routes/user.routes");
const productRouter = require("./src/api/routes/product.routes");
const routineRouter = require("./src/api/routes/routine.routes");
const reviewRouter = require("./src/api/routes/review.routes");
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

server.use(cors());
server.use(express.json())
server.use("/", userRouter);
server.use("/", productRouter);
server.use("/", routineRouter);
server.use("/", reviewRouter);

server.listen(PORT, () => {
    console.log(`listen port http://localhost:${PORT} `);
})
