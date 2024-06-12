import mongoose from 'mongoose'


export const db = async() =>{
    try {
        await mongoose.connect("mongodb+srv://ivanojeda:DS6kx5PFx0K2EGOl@cluster0.jeed5pk.mongodb.net/", {
            UseNewUrlParser: true,
            UseUnifiedTopology: true
        });
        console.log('conectado a mongoDB')
    } catch (error) {
        console.log('error al conectarse a mongoDB')
    }
}