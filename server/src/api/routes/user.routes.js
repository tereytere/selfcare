const express = require("express");
const router = express.Router();
const { addUser, login, getUserById, getUsers, deleteUser, updateUser, addRoutineToUser, deleteRoutinefromUser } = require("../controllers/user.controller");
const uploadUser = require("../../middleware/uploadUser");
const { isAuth, isAdmin } = require("../../middleware/auth");

router.post("/user/add", uploadUser.single("image"), addUser);
router.post("/login", login);
router.get("/user/:id", [isAuth], getUserById);
router.put("/user/:id", [isAuth], updateUser);
router.put("/user/routine/add/:idU/:idR", [isAuth], addRoutineToUser);
router.put("/user/routine/delete/:idU/:idR", [isAuth], deleteRoutinefromUser);
router.get("/users", [isAdmin], getUsers);
router.delete("/user/:id", [isAuth], deleteUser);
router.delete("/deleteuser/:id", [isAdmin], deleteUser);

module.exports = router