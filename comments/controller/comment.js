const {randomBytes} = require("crypto")
const {commentsDB} = require('../database/index')
const axios = require('axios')
exports.createComments = async(req,res) =>{
const commentId = randomBytes(4).toString("hex")
const {text} = req.body;
const snippetId = req.params.id;
const comments = commentsDB[snippetId] || [];

comments.push({commentId,text})
commentsDB[snippetId] = comments;
 //best place to publish an event 
  await axios.post("http://localhost:8005/events",{
      type:"CommentCreated",
      data:{
         id:commentId,
         content:text,
         snippetId
      }
   })
return res.status(201).json({
    success:true,
    comment:{commentId,text}
})

}

exports.getCommentBySnippetId = (req,res)=>{
   const snippetId = req.params.id;
   return res.status(200).json(commentsDB[snippetId]||[])
}