const express = require('express')
const axios = require('axios')

const app = express();
app.use(express.json())
app.post("/events",(req,res)=>{
    const events = req.body;
    axios.post("http://localhost:8000/events",events)//snippet service 
    axios.post("http://localhost:8001/events",events)//comment service
    axios.post("http://localhost:8002/events",events)//query service

    return res.status(200).json({})
})

const PORT = 8005
app.listen(PORT,()=>{
   console.log(`server listening at port ${PORT}`)
})