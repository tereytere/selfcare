const express = require("express");
const router = express.Router();

const { } = require("../controllers/review.controller");
const { isAuth, isAdmin } = require("../../middleware/auth");



//una o todas
router.get("/getreview", getReview);
router.get("/getallreviews", getAllReviews);

// por id y por nombre
router.get("/getbyid/:id", getRecipeById);
router.get("/getbyname/:name", getRecipeName);


//borrar review
router.delete("/deletereview/:id", deleteReview);

//updatar review
router.put("/updatereview", updateReview);
router.put("/reviewhidden", [isAdmin], updateReviewHidden);


module.exports = router