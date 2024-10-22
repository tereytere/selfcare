const User = require('../models/user.model');
const Routine = require('../models/routine.model');
const Product = require('../models/product.model');


const addRoutine = async (req, res) => {
    try {

        const { name, category, applyschedule, repeat, products, usesteps, description } = req.body;

        const repeatDays = Array.isArray(repeat) ? repeat : [];
        const productIds = Array.isArray(products) ? products : [];
        //const steps = Array.isArray(usesteps) ? usesteps : [];

        const newRoutine = new Routine({
            name,
            category,
            applyschedule,
            repeat: repeatDays,
            products: productIds,
            usesteps,
            description
        });
        const createdRoutine = await newRoutine.save();

        return res.status(201).json({ message: "Routine created", data: createdRoutine })
    } catch (error) {
        console.log(error);

    }
}


const getAllRoutine = async (req, res) => {
    try {

        let pag = parseInt(req.query.pag);
        let limit = parseInt(req.query.limit);


        const numRoutines = await Routine.countDocuments();


        limit = limit >= 20 ? 20 : limit <= 10 ? 10 : limit;
        pag = !isNaN(pag) ? pag : 1;
        limit = !isNaN(limit) ? limit : 10;


        const numPage = Math.ceil(numRoutines / limit);


        if (pag > numPage) {
            pag = numPage;
        }

        if (pag < 1) {
            pag = 1;
        }


        const allRoutines = await Routine.find().skip((pag - 1) * limit).limit(limit);


        res.json({
            previewPage: pag === 1 ? null : pag - 1,
            nextPage: numPage >= pag + 1 ? pag + 1 : null,
            quantityPage: allRoutines.length,
            totalRoutines: numRoutines,
            data: allRoutines
        });
    } catch (error) {
        console.error("Error to get routines:", error.message);
        res.status(404).json({ message: "Error al obtener las rutinas", error: error.message });
    }
};
const deleteRoutine = async (req, res) => {
    try {

        const { id } = req.params;


        const deletedRoutine = await Routine.findByIdAndDelete(id);


        if (!deletedRoutine) {
            return res.status(404).json({ message: "Routine not find" });
        }


        return res.status(201).json({ message: "Routine eliminated", data: deletedRoutine });
    } catch (error) {
        console.error("Error to eliminate routine:", error.message);


        return res.status(500).json({ message: "Error to eliminate routine", error: error.message });
    }
}


const getRoutine = async (req, res) => {
    try {

        const { id } = req.params;


        const routine = await Routine.findById(id);


        if (!routine) {
            return res.status(404).json({ message: "Routine not find" });
        }


        return res.status(201).json({ message: "Routine ok", data: routine });
    } catch (error) {
        console.error("Error to get routine:", error.message);


        return res.status(404).json({ message: "Error to get routine", error: error.message });
    }
}

const updateRoutine = async (req, res) => {
    try {

        const { id } = req.params;


        const updatedRoutine = await Routine.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );


        if (!updatedRoutine) {
            return res.status(404).json({ message: "Don't find routine" });
        }


        return res.status(200).json({ message: "Update routine", data: updatedRoutine });
    } catch (error) {
        console.error("Update error routine", error.message);


        return res.status(500).json({ message: "Update error", error: error.message });
    }
}
const addProductRoutine = async (req, res) => {

    const { idP, idR } = req.params;
    try {
        const findRoutine = await Routine.findById(idR);
        const products = findRoutine.products.includes(idP);

        if (!products) {
            const modifyRoutine = await Routine.findByIdAndUpdate(idR, { $push: { products: idP } }, { new: true });
            if (!modifyRoutine) {
                return res.status(404).json({ message: "Routine does not exist" });
            } else {
                return res.status(200).json({ message: "Routine update", data: modifyRoutine });
            }
        } else {
            return res.status(500).json({ message: "Product does not find" })
        }
    } catch (error) {
        console.log(error);
    }

}

const deleteProductRoutine = async (req, res) => {

    const { idR, idP } = req.params;
    try {
        const modifyProduct = await Routine.findByIdAndUpdate(idR, { $pull: { routines: idP } }, { new: true });
        if (!modifyProduct) {
            return res.status(404).json({ message: "Routine does not exist" });
        } else {
            return res.status(200).json({ message: "Routine updated", data: modifyProduct });
        }
    } catch (error) {
        console.log(error);
    }
}

/* const addReviewRoutine = async (req, res) => {

    const { idRe, idRo } = req.params;
    try {
        const modifyRoutine = await Routine.findByIdAndUpdate(idRo, { $push: { reviews: idRe } }, { new: true });
        if (!modifyRoutine) {
            return res.status(404).json({ message: "La Routine no existe" });
        } else {
            return res.status(200).json({ message: "Routine actualizada", data: modifyRoutine });
        }
    } catch (error) {
        console.log(error);
    }
} */

/* const deleteReviewRoutine = async (req, res) => {

    const { idRe, idRo } = req.params;
    try {
        const modifyRoutine = await Routine.findByIdAndUpdate(idRo, { $pull: { routines: idRe } }, { new: true });
        if (!modifyProduct) {
            return res.status(404).json({ message: "La Routine no existe" });
        } else {
            return res.status(200).json({ message: "Routine actualizada", data: modifyRoutine });
        }
    } catch (error) {
        console.log(error);
    }
} */






module.exports = { addRoutine, getAllRoutine, deleteRoutine, getRoutine, updateRoutine, addProductRoutine, deleteProductRoutine } /* addReviewRoutine, deleteReviewRoutine */


