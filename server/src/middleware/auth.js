const { verifyToken } = require('../utils/jwt');
const User = require('../api/models/user.model');

const isAuth = async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ message: "Not authorized" });
    }

    const token = authorization.split(' ')[1];
    if (!token) {
        return res.status(407).json({ message: "No token" });
    }

    let tokenVerify;
    try {
        tokenVerify = verifyToken(token);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Token expired" });
        }
        return res.status(403).json({ message: "Token invalid" });
    }

    if (!tokenVerify.id) {
        return res.status(404).json({ message: "ID doesn't exist" });
    }

    const logged = await User.findById(tokenVerify.id);
    if (!logged) {
        return res.status(404).json({ message: "User not found" });
    }

    req.dataUser = logged;
    next();
};

const isAdmin = async (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({ message: "No tienes autorización" });
    }

    const token = authorization.split(' ')[1];
    if (!token) {
        return res.status(407).json({ message: "No hay token" });
    }

    let tokenVerify;
    try {
        tokenVerify = verifyToken(token);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Token expirado" });
        }
        return res.status(403).json({ message: "Token inválido" });
    }

    if (!tokenVerify || !tokenVerify.id) {
        return res.status(404).json({ message: "No existe este ID" });
    }

    const logged = await User.findById(tokenVerify.id);
    if (!logged) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (logged.role !== "admin") {
        return res.status(401).json({ message: "No eres admin" });
    }

    req.dataUser = logged;
    next();
};

module.exports = { isAuth, isAdmin };