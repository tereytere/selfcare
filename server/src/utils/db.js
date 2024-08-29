const mongoose = require("mongoose");

const connectDB = async () => {
    console.log(process.env.DB_URL);
    try {
        const db = await mongoose.connect(process.env.DB_URL);
        const { name, host } = db.connection;
        console.log(`Nombre de la bd  ${name}  y servidor ${host}`)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { connectDB }