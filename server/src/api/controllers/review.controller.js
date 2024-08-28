const User = require('../models/user.model');
const Product = require('../models/product.model');
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
//agregar review 
const addReview = async (req, res) => {
    try {

        const { title, description, stars, author } = req.body;

  
        if (!title || !description || !stars || !author) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

  
        const newReview = new Review({
            title,
            description,
            stars,
            author
        });

  
        const existingReview = await Review.findOne({
            description,
            author,
            stars
        });

        if (existingReview) {
            return res.status(409).json({ message: "Review already exists" });
        }


        const createdReview = await newReview.save();


        return res.status(201).json({
            message: "Review created",
            data: createdReview
        });
    } catch (error) {
        console.error('Error creating review:', error);
        return res.status(500).json({ message: "Error creating review" });
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
            res.status(201).json({ success: true, message: deleteRe })
        } else {
            res.status(200).json({ success: false, message: "No existe el id" })
        }

    } catch (error) {
        res.status(500).json(error)
    }


}
module.exports = { deleteReview, updateReview,getReview,getAllReviews,addReview }