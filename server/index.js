import express from "express";
import bodyParser from "body-parser";

import Connection from "./database/Connection.js";

import Routes from "./routes/Routes.js";
import cors from 'cors'

const app = express();


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/',Routes)


Connection();




const PORT = 9000;

app.listen(PORT,()=>{
    console.log(`Server is running succesfully at ${PORT}`);
})