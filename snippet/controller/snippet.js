const {snippet} = require('../database/index')
const {randomBytes} = require('crypto')
const axios = require('axios')
exports.createSnippet = async(req,res) =>{
   const id = randomBytes(4).toString('hex')
   const {title,code} = req.body;
   snippet[id] = {
    id,
    title,
    code
   }
   //best place to publish an event 
 await  axios.post("http://localhost:8000/events",{
      type:"SnippetCreated",
      data:{
         id,
         title
      }
   })
   return res.status(201).json({
    success:true,
    snippet:snippet[id],
    message:"snippet created successfully"
   })
}

exports.getSnippet = (req,res)=>{
     return res.status(200).json(snippet)
}