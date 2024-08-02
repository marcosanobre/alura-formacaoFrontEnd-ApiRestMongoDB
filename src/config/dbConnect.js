import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect( "mongodb+srv://marconobre:admin123@cluster0.2ocgpjz.mongodb.net/alura-books?retryWrites=true&w=majority&appName=Cluster0" );
    return mongoose.connection;
}

export default conectaNaDatabase;

