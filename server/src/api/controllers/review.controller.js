const User = require('../models/user.model');
const Review = require('../models/review.model');
const Routine = require('../models/routine.model');

const addReview = async (req, res) => {

    try {
        const { idU, idR } = req.params;

        const { title, description, stars } = req.body;
        const currentAuthor = await User.findById(idU);
        let reviewExists = false;

        if (!currentAuthor) {
            return res.status(404).json({ message: "User not found" });
        }

        const existingRoutines = await Routine.find().populate("reviews");
        existingRoutines.forEach(routine => {
            routine.reviews.forEach(review => {
                let authorId = review.author.toString();
                let arrayId = authorId.split('\'');
                let simpleId = arrayId[0];
                if (simpleId === idU) {
                    reviewExists = true;
                }
            });
        });

        if (reviewExists) {
            return res.status(409).json({ message: "You cannot create another review for the same routine" });
        }

        const newReview = new Review({
            title,
            description,
            stars,
            author: idU
        });

        const createdReview = await newReview.save();
        await Routine.findByIdAndUpdate(idR, { $push: { reviews: createdReview._id } }, { new: true });

        return res.status(201).json({
            message: "Review created",
            data: createdReview
        });
    } catch (error) {
        console.error('Error creating the review:', error);
        return res.status(500).json({ message: "Error creating the review" });
    }
};

const getReview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        return res.status(200).json({ data: review });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener la reseña" });
    }
};

const getAllReviews = async (req, res) => {
    try {
        let pag = parseInt(req.query.pag);
        let limit = parseInt(req.query.limit);
        pag = !isNaN(pag) ? pag : 1;
        limit = !isNaN(limit) ? limit : 20;
        limit = limit > 20 ? 20 : limit < 10 ? 10 : limit;

        const numReviews = await Review.countDocuments();

        let numPage = Math.ceil(numReviews / limit);
        if (pag > numPage) {
            pag = numPage;
        }

        if (pag < 1) {
            pag = 1;
        }
        const reviews = await Review.find().skip((pag - 1) * limit).limit(limit);

        return res.status(200).json({
            previousPage: pag === 1 ? null : pag - 1,
            nextPage: numPage >= pag + 1 ? pag + 1 : null,
            quantityPage: reviews.length,
            data: reviews
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener las reseñas" });
    }
};

const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const reviewBody = req.body;
        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ message: "Review doesn't exist" });
        }
        if (review.author.toString() !== req.dataUser._id.toString()) {
            return res.status(403).json({ message: "Review author is incorrect" });
        }
        const updatedReview = await Review.findByIdAndUpdate(id, reviewBody, { new: true });
        return res.status(200).json({ message: "Review updated", data: updatedReview });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteRe = await Review.findByIdAndDelete(id);

        if (deleteRe) {
            await Routine.findByIdAndUpdate(deleteRe.routineId, { $pull: { reviews: id } });
            return res.status(200).json({ message: "Review deleted successfully", data: deleteRe });
        } else {
            return res.status(404).json({ message: "Review ID does not exist" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error deleting the review", error });
    }
};

module.exports = { deleteReview, updateReview, getReview, getAllReviews, addReview }