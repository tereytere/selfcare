const express = require("express");
const router = express.Router();
const { } = require("../controllers/routine.controller");
const { isAuth, isAdmin } = require("../../middleware/auth");


module.exports = router