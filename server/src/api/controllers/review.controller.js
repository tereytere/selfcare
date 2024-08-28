const User = require('../models/user.model');
const Product = require('../models/product.model');

const getReview = async (req, res) => {

}

/* const getAllReviews */






/* const updateReviewHidden */




const updateReview = async (req, res) => {
    try {
        const { id } = req.query;
        const reviewBody = req.body;
        const updateReview = await Review.findByIdAndUpdate(id, reviewBody, { new: true })
        if (!updateReview) {
            res.json({ success: false, message: "El id no existe" })
        } else {
            res.json(updateReview)
        }

    } catch (error) {
        res.status(200).json(error)
    }

}

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRe = await Review.findByIdAndDelete(id);
        if (deleteRe) {
            res.status(201).json({ success: true, message: deleteRe })
        } else {
            res.status(200).json({ success: false, message: "No existe el id" })
        }

    } catch (error) {
        res.status(500).json(error)
    }


}








module.exports = { deleteReview, updateReview, }