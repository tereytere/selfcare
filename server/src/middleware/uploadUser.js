const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "selfcareuser",
        allowedFormats: ["jpg", "png", "jpeg"]
    }
});

const uploadUser = multer({ storage });

module.exports = uploadUser;
