const Product = require('../models/product.model');
const { deleteFile } = require("../../utils/deleteCloudiFile")

const getAllProducts = async (req, res) => {
    try {
        let pag = parseInt(req.query.pag);
        let limit = parseInt(req.query.limit);

        pag = !isNaN(pag) ? pag : 1;
        limit = !isNaN(limit) ? limit : 20;
        limit = limit > 20 ? 20 : limit < 10 ? 10 : limit;

        const numProduct = await Product.countDocuments()

        let numPage = Math.ceil(numProduct / limit)

        if (pag > numPage) {
            pag = numPage;
        }

        if (pag < 1) {
            pag = 1;
        }

        const products = await Product.find().skip((pag - 1) * limit).limit(limit);
        return res.status(200).json({
            previousPage: pag === 1 ? null : pag - 1,
            nextPage: numPage >= pag + 1 ? pag + 1 : null,
            quantityPage: products.length,
            data: products
        });
    } catch (error) {
        console.log(error);
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" })
    }
    return res.status(200).json({ data: product })
}

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const findProduct = await Product.find({ name: req.body.name });

        if (findProduct.length === 0) {
            if (req.file) {
                newProduct.image = req.file.path;
            }
            const createdProduct = await newProduct.save();
            return res.status(201).json({ message: "Product created", data: createdProduct })
        }
        else {
            return res.status(409).json({ message: "Product already exists" })
        }
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    const updateProduct = await Product.findByIdAndUpdate(id, product, { new: true })

    if (!updateProduct) {
        return res.status(404).json({ message: "Product not found" })
    } else {
        return res.status(200).json({ message: "Product updated", data: updateProduct })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);

        if (deleteProduct) {
            deleteFile(deleteProduct.image)
            return res.status(200).json({ message: "Product deleted from database" })
        }
        else {
            return res.status(404).json({ message: "Product not found" })
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = { getAllProducts, getProduct, addProduct, updateProduct, deleteProduct }