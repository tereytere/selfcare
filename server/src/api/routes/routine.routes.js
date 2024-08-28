const express = require("express");
const router = express.Router();
const { } = require("../controllers/routine.controller");
const { isAuth, isAdmin } = require("../../middleware/auth");
const { addRoutine, getAllRoutine, deleteRoutine, getRoutine, updateRoutine, addProductRoutine, deleteProductRoutine } = require("../controllers/routine.controller")

router.post("/routine/add", addRoutine, [isAuth])
router.get("routines", getAllRoutine)
router.delete("/deleteroutine", deleteRoutine, [isAuth])
router.get("routine/:id", getRoutine)
router.put("/routine/:id", updateRoutine, [isAuth])
router.put("routine/add/:idR/:idP", addProductRoutine, [isAuth])
router.put("/routine/delete/:idR/:idP", deleteProductRoutine, [isAuth])




module.exports = router