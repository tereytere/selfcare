const express = require("express");
const router = express.Router();
const { addUser, login, getUserById, getUsers, deleteUser, updateUser, addRoutineToUser, addReviewToUser, deleteRoutinefromUser, deleteReviewfromUser } = require("../controllers/user.controller");
const uploadUser = require("../../middleware/uploadUser");
const { isAuth, isAdmin } = require("../../middleware/auth");

router.post("/user/add", uploadUser.single("image"), addUser);
router.post("/login", login);
router.get("/user/:id", [isAuth], getUserById);
router.put("/user/:id", [isAuth], updateUser);
router.put("/user/add/:idU/:idR", [isAuth], addRoutineToUser);
router.put("/user/delete/:idU/:idR", [isAuth], deleteRoutinefromUser);
router.put("/user/add/:idU/:idRe", [isAuth], addReviewToUser);
router.put("/user/delete/:idU/:idRe", [isAuth], deleteReviewfromUser);
router.get("/users", [isAdmin], getUsers);
router.delete("/deleteuser", [isAdmin], deleteUser);

module.exports = router