const express= require("express");
const bodyParser= require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>{
    const n1=Number(req.body.num1);
    const ope=req.body.ope1
    const n2=Number(req.body.num2);
    if(ope=='+'){
      res.send(`Addition is ${n1+n2}`);
    }
    else if(ope=='-'){
      res.send(`Subtraction is ${n1-n2}`);
    }
    else if(ope=='*'){
      res.send(`Multiplication is ${n1*n2}`);
    }
    else if(ope=='/'){
      res.send(`answer is ${n1/n2}`);
    }
    else{
      res.send("Invalid operator");
    }
    
  
})

app.listen(3000,(req,res)=>{
  console.log("server started at port 3000")
})