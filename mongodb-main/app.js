const express = require("express");
require("./db/conn.js");
const User = require("./models/users");
const cors = require("cors");
const { ObjectID } = require("bson");
const app = express();
const port =  8090;

app.use(express.json())
app.use(cors())

app.get("/users",async(req,res)=>{
    try{
        const usersData= await User.find();
            res.status(200).json(usersData);
    }catch(e){
        res.send(e);
    }
})

app.get("/users/:id",async(req, res) => {
  try{
    const userData =await User.findOne({_id : ObjectID(req.params.id)});
        res.status(200).json(userData);
    
  }catch(e){
      res.status(404).send(e);
  }
});


app.post("/users",async(req,res)=>{
    try{
                const user = new User(req.body);
        const createUser = await user.save();
        res.status(201).json(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})
app.put("/users/:id",async(req,res)=>{
    try{
        // const _id= req.params.id;
        const user = await User.findById({_id : ObjectID(req.params.id)});
        const updatedUser = req.body;
        const newUser = await user.updateOne(updatedUser)
        res.status(200).json(newUser);  
        // console.log(updateUser);
    }catch(e){
        res.send(e);
    }
})

app.delete("/users/:id",async(req,res)=>{
    try{
    // const _id=req.params.id;
    const deleteData = await User.findByIdAndDelete(req.params.id)
    if(!req.params.id){
        return res.status(400).send()
    }
    res.status(200).json(deleteData);
    }catch(e){
        res.status(500).send(e);
    }
})

app.listen(port, () => {
  console.log(`server is running on  ${port}`);
});
