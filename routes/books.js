const express=require("express")
const router=express.Router()
const Book=require("../models/book")
// GET ALL BOOKS ROUTE
router.get("/",async (req,res)=>{
    res.send("All Books")
})


router.get("/new",(req,res)=>{
   res.send("New Book")
})

router.post("/", async (req,res)=>{

    res.send("Create a Book")
})
module.exports=router
