import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if(cached.conn) {
        console.log("connected SUCCESSFULYYYYY")
        return cached.conn
    }
    if(!MONGODB_URI) {
        throw new Error("MONGODB_URI is missing")
    }

    cached.promise = cached.promise || mongoose.connect("mongodb+srv://tesJoenEvently:joeng123@cluster0.wcpklou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        dbName: "JoenEvently",
        bufferCommands: false
    })
    cached.conn = await cached.promise;
    return cached.conn;
};
