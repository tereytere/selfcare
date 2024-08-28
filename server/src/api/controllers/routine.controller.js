const User = require('../models/user.model');
const Routine = require('../models/routine.model');
const Product = require('../models/product.model');


const addRoutine = async (req, res) => {
    try {

        const newRoutine = new Routine = req.body;
        const createdRoutine = await newRoutine.save();

        return res.status(201).json({ message: "Routine creada", data: createdRoutine })
    } catch (error) {
        console.log(error);

    }
}


const getAllRoutine = async (req, res) => {
    try {

        let pag = parseInt(req.query.pag);
        let limit = parseInt(req.query.limit);


        const numRoutines = await Routine.countDocuments();

        // Validar y ajustar los valores de pag y limit
        limit = limit >= 10 ? 20 : limit <= 0 ? 10 : limit; // Limitar a un máximo de 10 y mínimo de 5
        pag = !isNaN(pag) ? pag : 1; // Si pag no es un número válido, establecer en 1
        limit = !isNaN(limit) ? limit : 10; // Si limit no es un número válido, establecer en 5


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
        console.error("Error al obtener las rutinas:", error.message);
        res.status(404).json({ message: "Error al obtener las rutinas", error: error.message });
    }
};
const deleteRoutine = async (req, res) => {
    try {

        const { id } = req.params;


        const deletedRoutine = await Routine.findByIdAndDelete(id);


        if (!deletedRoutine) {
            return res.status(404).json({ message: "Routine no encontrada" });
        }


        return res.status(201).json({ message: "Routine eliminada", data: deletedRoutine });
    } catch (error) {
        console.error("Error al eliminar la rutina:", error.message);


        return res.status(500).json({ message: "Error al eliminar la rutina", error: error.message });
    }
}


const getRoutine = async (req, res) => {
    try {

        const { id } = req.params;


        const routine = await Routine.findById(id);


        if (!routine) {
            return res.status(404).json({ message: "Routine no encontrada" });
        }


        return res.status(201).json({ message: "Routine encontrada", data: routine });
    } catch (error) {
        console.error("Error al obtener la rutina:", error.message);


        return res.status(404).json({ message: "Error al obtener la rutina", error: error.message });
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
            return res.status(404).json({ message: "Routine no encontrada" });
        }


        return res.status(200).json({ message: "Routine actualizada", data: updatedRoutine });
    } catch (error) {
        console.error("Error al actualizar la rutina:", error.message);


        return res.status(500).json({ message: "Error al actualizar la rutina", error: error.message });
    }
}
const addProductRoutine = async (req, res) => {

    const { idP, idR } = req.params;
    try {
        const modifyRoutine = await Routine.findByIdAndUpdate(idR, { $push: { reviews: id = idP } }, { new: true });
        if (!modifyRoutine) {
            return res.status(404).json({ message: "La Routine no existe" });
        } else {
            return res.status(200).json(modifyRoutine);
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteProductRoutine = async (req, res) => {

    const { idR, idP } = req.params;
    try {
        const modifyProduct = await Routine.findByIdAndUpdate(idR, { $pull: { routines: id = idP } }, { new: true });
        if (!modifyProduct) {
            return res.status(404).json({ message: "La Routine no existe" });
        } else {
            return res.status(200).json(modifyProduct);
        }
    } catch (error) {
        console.log(error);
    }
}






module.exports = { addRoutine, getAllRoutine, deleteRoutine, getRoutine, updateRoutine, addProductRoutine, deleteProductRoutine }


