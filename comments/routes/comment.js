const express = require('express')
const {createComments,getCommentBySnippetId} = require('../controller/comment')
const router = express.Router();

router.route("/:id/comment").post(createComments).get(getCommentBySnippetId)

module.exports=router