const {User, Thought} = require("../models")


const thoughtsController = {
    getThoughts(req,res){
        Thought.find()
        .then((thoughts)=>{
            res.json(thoughts)
            .catch ((err)=>{
                console.log((err)=>{
                    res.status(500).json(err)
                })
            })
        })
    },createThought(req, res){
        Thoughts.create(req, res) 
            Thoughts.create(req.body)
                .then((thought)=>{
                    res.json(userData)
                })
                .catch((err)=>{
                    console.log(err)
                    res.status(500).json(err);
                })
    },updateThought (req, res){
        User.updateOne(
            {_id: req.params.id},
            {$set: req.body},
            { runValidators: true, new: true }
        ) .then ((userData)=>{
            res.json(thought)
        })
        .catch((err)=>{
            res.status(500).json(err);
        })
        
    }, deleteThought (req,res){
        User.findOneAndDelete(
            {_id : req.params.id}
        )   .then((thought)=>{
            res.json(thought)
        }) .catch((err)=>{
            res.status(500).json(err)
        })
    }, getSingleThought (req, res){
        User.findOne(
            {_id : req.params.id}
        )   .then((thought)=>{
            res.json(thought)
        }) .catch((err)=>{
            res.status(500).json(err)
        })
    }, addReaction (req, res){
        thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
          ) .then ((thought)=>{
            res.json(thought)
        })
        .catch((err)=>{
            res.status(500).json(err);
        })
        
    }, removeReaction (req,res){
        thought.findOneAndDelete(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
          ) .then ((thought)=>{
            res.json(thought)
        })
        .catch((err)=>{
            res.status(500).json(err);
        })
        
    }
}

module.exports = thoughtsController