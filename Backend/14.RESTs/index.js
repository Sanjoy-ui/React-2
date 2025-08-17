import express from "express";
// import path from "path"
import {dirname} from "path"
import {fileURLToPath} from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))
import methodOverride from "method-override"

const app = express()
const port= 8080

// app.set("view engine", ejs)
// app.set("views" , path.join(__dirname, "views"));
// app.set("views" , path.join(__dirname, "public"));
let posts = [
    {
        username : "sanjoy deb",
        content : "Sanjoy always chickens out",
        id : "1",
    },
     {
        username : "rahul deb",
        content : "ddslsdlfldjfdjsiofdoisdjf",
        id : "2",
    },
     {
        username : "mika ",
        content : "mika always pork out",
        id : "3",
    },
     {
        username : "eren",
        content : "eren always  out",
        id : "4",
    },
     {
        username : "nigger ",
        content : "im always niggger out",
        id : "5",
    },
]

app.use(express.static("public"));
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride("_method"))

app.get("/" , (req , res )=>{
    res.render("index.ejs")
})

app.get("/posts" , (req,res)=>{
    res.render("index.ejs" , {  posts})
})
app.get("/posts/new" , (req,res)=>{
    res.render("new.ejs")
})
app.post("/posts" , (req , res)=>{
    let {username , content } = req.body ;
    posts.push({username , content})
    console.log(req.body)

    res.redirect("/posts")
})

app.get("/posts/:id", (req,res)=>{
    const { id }=req.params 
    const post = posts.find((post)=> id===post.id)
    res.render("post.ejs" , {data : post})
})

app.get("/posts/:id/edit" , (req,res)=>{
    const {id } = req.params
    const userPost = posts.find((post)=> id=== post.id);
    res.render("Edit.ejs" , {data : userPost})
    
    
})
app.patch("/posts/:id" , (req,res)=>{
    const {id}= req.params;
    let upContent = req.body.content
    const post = posts.find((post)=> id===post.id)
    post.content = upContent;
    res.redirect("/posts")
    console.log(post.content)


})

app.delete("/posts/:id" , (req,res)=>{
    const {id}= req.params;
    posts = posts.filter((post)=> post.id !== id)
    res.redirect("/posts")
    
})

app.listen(port , ()=>{
    console.log(`server is running on ${port}`)
})