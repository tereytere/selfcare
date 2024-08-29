const User = require('../models/user.model');
const User = require('../models/user.model');
const Product = require('../models/product.model');
const Review = require('../models/review.model'); 
const addReview = async (req, res) => {
    try {
        const { idU, idR } = req.params; 
        const { title, description, stars } = req.body;
        const author = await User.findById(idU);
        if (!author) {
            return res.status(404).json({ message: "User not found" });
        }
        const existingReview = await Review.findOne({ author: idU, routineId: idR });
        if (existingReview) {
            return res.status(409).json({ message: "You cannot create another review for the same routine" });
        }
        const newReview = new Review({
            title,
            description,
            stars,
            author: idU,
            routineId: idR
        });

        const createdReview = await newReview.save();
        await Routine.findByIdAndUpdate(idR, { $push: { reviews: createdReview._id }  }, {new: true});

        return res.status(201).json({
            message: "Review created",
            data: createdReview
        });
    } catch (error) {
        console.error('Error creating the review:', error);
        return res.status(500).json({ message: "Error creating the review" });
    }
};

/*const addReviewToUser = async (req, res) => {

    const { idU, idRe } = req.params;
    try {
        const findUser = await User.findById(idU);
        const reviews = findUser.reviews.includes(idR);
        if (!reviews) {
            const findUser = await User.find({ reviews: findUser.reviews })
            if (findUser.length === 0) {
                const modifyUser = await User.findByIdAndUpdate(idU, { $push: { reviews: idRe } }, { new: true });
                if (!modifyUser) {
                    return res.status(404).json({ message: "El usuario no existe" });
                } else {
                    return res.status(200).json({ message: "Usuario modificado", data: modifyUser });
                }
            }
        } else {
            return res.status(409).json({ message: "La review ya existe" });
        }
    } catch (error) {
        console.log(error);
    }
}*/
//obtener un producto por id
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

//listar todos los productos
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

//actualizar usuario
const updateReview = async (req, res) => {
    try {
        const { id } = req.params; 
        const reviewBody = req.body;
        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ success: false, message: "El id no existe" });
        }
        if (review.author.toString() !== req.dataUser._id.toString()) {
            return res.status(403).json({ success: false, message: "No tienes permiso para actualizar esta reseña" });
        }
        const updatedReview = await Review.findByIdAndUpdate(id, reviewBody, { new: true });
        return res.status(200).json({ success: true, data: updatedReview });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Error al actualizar la reseña", error });
    }
};

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteRe = await Review.findByIdAndDelete(id);

        if (deleteRe) {
            await Routine.findByIdAndUpdate(deleteRe.routineId, { $pull: { reviews: id } });
            return res.status(200).json({ success: true, message: "Review deleted successfully", data: deleteRe });
        } else {
            return res.status(404).json({ success: false, message: "Review ID does not exist" });
        }
    } catch (error) {
        console.error('Error deleting the review:', error);
        return res.status(500).json({ success: false, message: "Error deleting the review", error });
    }
};

module.exports = { deleteReview, updateReview,getReview,getAllReviews,addReview }