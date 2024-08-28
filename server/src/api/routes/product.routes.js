const express = require("express");
const router = express.Router();
const { getAllProducts, getProduct, addProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const uploadProduct = require("../../middleware/uploadProduct");
const { isAdmin } = require("../../middleware/auth");

router.get("/products", getAllProducts);
router.get("/product/:id", getProduct);

//rutas admin
router.post("/addProduct", [isAdmin], uploadProduct.single("image"), addProduct);
router.put("/updateProduct", [isAdmin], updateProduct);
router.delete("/deleteProduct", [isAdmin], deleteProduct);

module.exports = router