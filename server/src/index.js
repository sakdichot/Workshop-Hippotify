import express from "express";
import connection from "./config/database.js";

const app = express();
const port = 3000;

app.use(express.json());

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else {
        console.log('database is connnected')
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
