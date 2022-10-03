const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog',async (req,res)=>{
    let page=req.query.page
    let search=(req.query.search).trim()
    let data=await Blog.find({topic:search}).limit(5*page)
    res.send(data)
})

router.post('/blog',async (req,res)=>{
    let data=await Blog.create(req.body)
    res.json(data)
})

router.put("/blog/:id",async (req,res)=>{
    let data=await Blog.update({_id:req.params.id},req.body)
    res.send(data)
})

router.delete("/blog/:id",async (req,res)=>{
    let data=await Blog.deleteOne({_id:req.params.id})
    res.json(data)
})

module.exports = router;