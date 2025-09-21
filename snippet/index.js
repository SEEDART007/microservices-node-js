const express = require('express')
const app = express();
const cors = require('cors')
const snippetRouter = require('./routes/snippet')

const port = 8000
app.use(express.json())
app.use(cors())
app.use("/api/v1/snippet",snippetRouter)

app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})