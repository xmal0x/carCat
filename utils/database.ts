import mongoose from "mongoose";

let isConnected= false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGODB_URI) {
        throw new Error('DB connection string is undefined')
    }

    if (isConnected) {
        console.log('MongoDB is already connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'carCat',
        })

        isConnected = true

        console.log('MongoDB is connected')
    } catch (e) {
        console.error('Failed to connect to MongoDB:', e);
    }
}
