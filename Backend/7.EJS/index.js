import express from "express"
import bodyParser from "body-parser";
import {dirname} from "path"
import {fileURLToPath} from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 4000;

app.get("/" ,(req , res)=>{
    const today = new Date()
    const day = today.getDay();
    const gotDate = today.toLocaleDateString()


    res.render("solution.ejs" , {
        dayType : day,
        advice : gotDate
    })
} )

app.listen(port , ()=>{
    console.log("server is running " , port);
})