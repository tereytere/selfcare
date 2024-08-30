const express = require("express");
const router = express.Router();
const { } = require("../controllers/routine.controller");
const { isAuth, isAdmin } = require("../../middleware/auth");
const { addRoutine, getAllRoutine, deleteRoutine, getRoutine, updateRoutine, addProductRoutine, deleteProductRoutine, addReviewRoutine, deleteReviewRoutine } = require("../controllers/routine.controller")

router.post("/routine/add", addRoutine, [isAuth])
router.get("/routines", getAllRoutine)
router.delete("/routine/delete/:id", deleteRoutine, [isAuth])
router.get("/routine/:id", getRoutine)
router.put("/routine/update/:id", updateRoutine, [isAuth])
router.put("/routine/product/add/:idR/:idP", addProductRoutine, [isAuth])
router.put("/routine/product/delete/:idR/:idP", deleteProductRoutine, [isAuth])
//router.put("routine/review/add/:idRo/:idRe", addReviewRoutine, [isAuth])
//router.put("routine/review/delete/:idRo/:idRe", deleteReviewRoutine, [isAuth])




module.exports = router