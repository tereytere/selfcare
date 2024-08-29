const express = require("express");
const router = express.Router();

const { addReview, getReview, getAllReviews, deleteReview, updateReview } = require("../controllers/review.controller");
const { isAuth, isAdmin } = require("../../middleware/auth");

// Obtener una reseña por ID
router.get("/review/:id", getReview);

// Listar todas las reseñas
router.get("/reviews", getAllReviews);

// Crear una nueva reseña (requiere autenticación)
router.post("/addReview/:idR", [isAuth], addReview);

// Borrar una reseña por ID (requiere autenticación y autorización)
router.delete("/deletereview/:id", [isAuth, isAdmin], deleteReview);

// Actualizar una reseña por ID (requiere autenticación y verificar que el usuario es el autor)
router.put("/updatereview/:id", [isAuth], updateReview);

module.exports = router;
