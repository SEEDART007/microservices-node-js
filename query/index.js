const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

const snippets = {};

app.get("/snippets",(req,res)=>{
   return res.status(200).json({snippets})
})

app.post("/events",(req,res)=>{
    const {type,data} = req.body;
    if(type==="SnippetCreated"){
        const {id,text} = data;
        snippets[id] = {id,title,comments:[]}
     }
     if(type==="CommentCreated"){
        const {id,content,snippetId } = data;
        snippets[snippetId].comments.push({id,content})
     }
     return res.status(200).json({})
})

const PORT = 8002
app.listen(PORT,()=>{
console.log(`query service listening at port ${PORT}`)
})