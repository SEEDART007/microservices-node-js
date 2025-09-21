const express = require('express')
const commentRouter = require('./routes/comment')
const app = express();
const cors = require('cors')


const port = 8001
app.use(cors())
app.use(express.json())
app.use("/api/v1/snippet",commentRouter)

app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})