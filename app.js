const express= require("express");
const bodyParser= require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>{
    const n1=Number(req.body.num1);

    const n2=Number(req.body.num2);
    const add=n1+n2;
    res.send(`addition is ${add}`);
})

app.listen(3000,(req,res)=>{
  console.log("server started at port 3000")
})