const {snippet} = require('../database/index')
const {randomBytes} = require('crypto')
exports.createSnippet = (req,res) =>{
   const id = randomBytes(4).toString('hex')
   const {title,code} = req.body;
   snippet[id] = {
    id,
    title,
    code
   }
   return res.status(201).json({
    success:true,
    snippet:snippet[id],
    message:"snippet created successfully"
   })
}

exports.getSnippet = (req,res)=>{
     return res.status(200).json(snippet)
}