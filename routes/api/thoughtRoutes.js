const express = require('express')
const thoughts = require('../../models/thoughts')
const router = express.router
const thoughts = require ('../../models/thoughts')

router.get('/', async (req, res)=>{
try{
    const thoughts = await thoughts.find()
    res.json(thoughts)
} catch (err){
    res.status(500).json({message:err.message})
}
})


router.get('/:id', (req, res) => {

})
//creating thoughts
router.post('/', (req, res)=>{
    const thought

})

router.put('/:id', (req,res)=>{

})

router.delete('/:id', (req,res)=>{

})













module.exports = router