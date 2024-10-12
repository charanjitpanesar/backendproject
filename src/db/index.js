import mongoose from "mongoose";
import {DB_NAME} from "../constacts.js";


const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n hnji MONGODB connected!! DB HOST:${connectionInstance.connection.host}`);
    }catch(error){
        console.log("HNJI MONGODB CONNECTION ERROR" , error);
        process.exit(1)
    }
}
export default connectDB;