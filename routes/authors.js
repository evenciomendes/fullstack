const express=require("express")
const router=express.Router()
const Author=require("../models/author")
// GET ALL AUTHORS ROUTE
router.get("/",async (req,res)=>{
    let searchOptions={}
    if(req.query.name != null && req.query.name!=""){
        searchOptions={name: new RegExp(req.query.name,'i')}
     //   console.info("SEARCH OPTIONS(1): ", searchOptions)
    }
    try{
        const authors= await Author.find(searchOptions)
      //  console.info("SEARCH OPTIONS(2): ", searchOptions)
        res.render("authors/index",{
            authors:authors,
            searchOptions:req.query
    })
    }catch(err){
        res.redirect("authors")
        console.info("ERROR:",{errorMessage:err.message})
    }
})

router.get("/new",(req,res)=>{
    res.render("authors/new",{author:new Author()})
})

router.post("/", async (req,res)=>{
    const author = new Author({
        name:req.body.name
    })
    try{
        const newAuthor= await author.save()
        res.redirect("authors")
    }catch{
        res.render("authors/new",{
            author:author,
            errorMessage:"Error creating an author"
        })
    }

})
module.exports=router
