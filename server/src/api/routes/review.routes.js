const express = require("express");
const router = express.Router();

const { addReview, getReview, getAllReviews, deleteReview, updateReview, getUserReview } = require("../controllers/review.controller");
const { isAuth } = require("../../middleware/auth");

// Obtener una reseña por ID
router.get("/review/:id", getReview);

// Obtener una reseña por ID de usuario
router.get("/review/user/:id", getUserReview);

// Listar todas las reseñas
router.get("/reviews", getAllReviews);

// Crear una nueva reseña (requiere autenticación)
router.post("/review/add/:idU/:idR", [isAuth], addReview);

// Borrar una reseña por ID (requiere autenticación y autorización)
router.delete("/review/delete/:id", [isAuth], deleteReview);

// Actualizar una reseña por ID (requiere autenticación y verificar que el usuario es el autor)
router.put("/review/update/:id", [isAuth], updateReview);

module.exports = router;