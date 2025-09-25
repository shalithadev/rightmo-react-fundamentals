import mongoose from "mongoose";

type MongooseConn = {
    conn: null | typeof mongoose,
}

declare global {
    var mongoose: MongooseConn;
}

global.mongoose = {
    conn: null,
}

export const connectMongoDB = async () => {
    if(global.mongoose && global.mongoose.conn){
        console.log("Previous Connection!");

        return global.mongoose.conn;
    }else{
        if(!process.env.MONGODB_URI){
            throw new Error('Please Enter db uri');
        }

        const promise = await (mongoose.connect(process.env.MONGODB_URI,{
            autoIndex:true
        }))

        global.mongoose = {
            conn: promise
        }
        console.log("New Connection!");

        return global.mongoose.conn;
    }
};