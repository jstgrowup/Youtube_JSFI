import mongoose from "mongoose";

const connectDB = async() => {
 await mongoose.connect("mongodb://localhost:27017/nem201b20");
    console.log("database connection established");
}
export default connectDB