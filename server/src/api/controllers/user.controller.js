const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { generateToken } = require('../../utils/jwt');
const { deleteFile } = require('../../utils/deleteCloudiFile');

const addUser = async (req, res) => {

    try {
        const newUser = new User(req.body);
        const findUser = await User.find({ email: newUser.email })
        if (findUser.length === 0) {
            if (req.file) {
                newUser.image = req.file;
            }
            newUser.password = bcrypt.hashSync(newUser.password, 10);
            const createdUser = await newUser.save();
            res.status(201).json({ message: "User created", data: createdUser });
        } else {
            res.status(409).json({ message: "Email already exists" });
        }
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const user = req.body;
        const userByEmail = await User.find({ email: user.email });
        if (userByEmail.length !== 0) {
            if (bcrypt.compareSync(user.password, userByEmail[0].password)) {
                const data = { id: userByEmail[0]._id, email: userByEmail[0].email, role: userByEmail[0].role };
                const token = generateToken(data);
                return res.status(202).json({ message: "Token created", token: token });
            } else {
                return res.status(403).json({ message: "Wrong password" });
            }
        } else {
            return res.status(404).json({ message: "Email doesn't exist" });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const findUser = await User.findById(id).populate("routines");
        if (!findUser) {
            return res.status(404).json({ message: "User desn't exist" });
        } else {
            return res.status(200).json({ message: "User found", data: findUser });
        }
    } catch (error) {
        console.log(error);
    }
}

const getUsers = async (req, res) => {
    try {
        let pag = parseInt(req.query.pag);
        let limit = parseInt(req.query.limit);

        pag = !isNaN(pag) ? pag : 1;
        limit = !isNaN(limit) ? limit : 20;
        limit = limit > 20 ? 20 : limit < 10 ? 10 : limit;

        const numUser = await User.countDocuments()

        let numPage = Math.ceil(numUser / limit)

        if (pag > numPage) {
            pag = numPage;
        }

        if (pag < 1) {
            pag = 1;
        }


        const findUsers = await User.find().skip((pag - 1) * limit).limit(limit).populate("routines");
        if (!findUsers) {
            return res.status(404).json({ message: "No users found" });
        } else {
            return res.status(200).json({
                previousPage: pag === 1 ? null : pag - 1,
                nextPage: numPage >= pag + 1 ? pag + 1 : null,
                quantityPage: findUsers.length,
                message: "Users found", data: findUsers
            });
        }
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const findUser = await User.findByIdAndUpdate(id, body, { new: true });
        if (!findUser) {
            return res.status(404).json({ message: "User doesn't exist" });
        } else {
            return res.status(200).json({ message: "User updated", data: findUser });
        }
    } catch (error) {
        console.log(error);
    }
}

const addRoutineToUser = async (req, res) => {

    const { idU, idR } = req.params;
    try {
        const findUser = await User.findById(idU);
        const routines = findUser.routines.includes(idR);
        if (!routines) {
            const modifyUser = await User.findByIdAndUpdate(idU, { $push: { routines: idR } }, { new: true });
            if (!modifyUser) {
                return res.status(404).json({ message: "User doesn't exist" });
            } else {
                return res.status(200).json({ message: "User updated", data: modifyUser });
            }
        } else {
            return res.status(409).json({ message: "Routine already exists" });
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteRoutinefromUser = async (req, res) => {

    const { idU, idR } = req.params;
    try {
        const modifyUser = await User.findByIdAndUpdate(idU, { $pull: { routines: idR } }, { new: true });
        if (!modifyUser) {
            return res.status(404).json({ message: "User doesn't exist" });
        } else {
            return res.status(200).json({ message: "User updated", data: modifyUser });
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        if (deleteUser) {
            return res.status(202).json({ success: true, message: "User deleted successfully", deleted: deleteUser })
        }
        if (deleteUser.image !== null) {
            deleteFile(deleteUser.image)
            return res.status(202).json({ success: true, message: "User deleted successfully", deleted: deleteUser });
        }
        else {
            return res.status(404).json({ success: false, message: "UserId not found" })
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = { addUser, login, getUserById, getUsers, deleteUser, updateUser, addRoutineToUser, deleteRoutinefromUser }