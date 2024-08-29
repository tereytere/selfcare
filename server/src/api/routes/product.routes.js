const express = require("express");
const router = express.Router();
const { getAllProducts, getProduct, addProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const uploadProduct = require("../../middleware/uploadProduct");
const { isAdmin } = require("../../middleware/auth");

router.get("/products", getAllProducts);
router.get("/product/:id", getProduct);

//rutas admin
router.post("/product/add", [isAdmin], uploadProduct.single("image"), addProduct);
router.put("/product/update/:id", [isAdmin], updateProduct);
router.delete("/product/delete/:id", [isAdmin], deleteProduct);

module.exports = router