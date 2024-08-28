const express = require("express");
const router = express.Router();
const { } = require("../controllers/product.controller");
const uploadProduct = require("../../middleware/uploadProduct");
const { isAuth, isAdmin } = require("../../middleware/auth");

router.post("/add", uploadProduct.single("image"), addUser);

module.exports = router