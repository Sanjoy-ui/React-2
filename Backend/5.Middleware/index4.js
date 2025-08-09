import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path"
import {fileURLToPath} from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))





const app = express();
const port = 4000;
let street  , pet;
let band = '';

function bandName(req , res , next){
    band = req.body["street"] + req.body["pet"];
    next()
}

app.use(bodyParser.urlencoded({extended:true}))
app.use(bandName)
app.get("/" , (req ,res)=>{
  res.sendFile(__dirname + "/public/index.html")
})
app.post("/submit" , (req , res)=>{
  
  res.send(`<h1> BandName is : ${band}</h1>`)

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
