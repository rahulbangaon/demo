
import mongoose from 'mongoose';


const Connection = async ()=>{

    const url = `mongodb+srv://rahul:Dhaka%400403@studentmanagement.nfozxye.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(url);
        console.log("Connected to database successfully");
    }catch(error){
        console.log("Error occured while Connecting",error);
    }
    
}

export default Connection;