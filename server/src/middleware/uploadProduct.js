const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "product",
        allowedFormats: ["jpg", "png", "jpeg"]
    }
});

const uploadProduct = multer({ storage });

module.exports = uploadProduct;
