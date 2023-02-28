const {User, Thought} = require("../models")

const userController = {
    getUsers(req,res){
        User.find()
            .select("-__v")
            .then((userData)=>{
                res.json(userData)
            })
            .catch((err)=>{
                console.log(err)
                res.status(500).json(err)
            })
    } ,
    createUser(req, res){
        User.create(req, res) 
            User.create(req.body)
                .then((userData)=>{
                    res.json(userData)
                })
                .catch((err)=>{
                    console.log(err)
                    res.status(500).json(err);
                })
    },updateUser (req, res){
        User.updateOne(
            {_id: req.params.id},
            {$set: req.body},
            { runValidators: true, new: true }
        ) .then ((userData)=>{
            res.json(userData)
        })
        .catch((err)=>{
            res.status(500).json(err);
        })
        
    }, deleteUser (req,res){
        User.findOneAndDelete(
            {_id : req.params.id}
        )   .then((userData)=>{
            res.json(userData)
        }) .catch((err)=>{
            res.status(500).json(err)
        })
    },  getSingleUser (req, res){
        User.findOne(
            {_id : req.params.id}
            )   .then((userData)=>{
                res.json(userData)
            }) .catch((err)=>{
                res.status(500).json(err)
            })
    }
}


module.exports= userController