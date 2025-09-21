const {randomBytes} = require("crypto")
const {commentsDB} = require('../database/index')
exports.createComments = (req,res) =>{
const commentId = randomBytes(4).toString("hex")
const {text} = req.body;
const snippetId = req.params.id;
const comments = commentsDB[snippetId] || [];

comments.push({commentId,text})
commentsDB[snippetId] = comments;
return res.status(201).json({
    success:true,
    comment:{commentId,text}
})

}

exports.getCommentBySnippetId = (req,res)=>{
   const snippetId = req.params.id;
   return res.status(200).json(commentsDB[snippetId]||[])
}