import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to Mongo DB.`);
    } catch (error) {
        console.log("/libs/mongodb/connectMongoDB error");
        console.log(error);
    }
};

export default connectMongoDB;
