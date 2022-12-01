const express = require('express')
const workoutRoutes=require('./routes/workouts.js')
const mongoose = require('mongoose')
require('dotenv').config()



// express app
const app = express()

// ----------MIDDLEWARES
// Any req that comes and have a body, it parses and attaches it to the req object.
app.use(express.json())

app.use((req,res,next)=>{
    // console.log(req.path,req.method,req.body)
    next()
})

// request will go to /api/workout/ all the routes of workoutRoutes will be added at the end
app.use('/api/workouts',workoutRoutes)

// routes
app.get('/:id',(req,res)=>{
    res.send("hello")
    // console.log(req.params.id)
})

// CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    
// listening to requests    
app.listen(process.env.PORT,()=>{
    console.log("Connected to db & listening on port "+process.env.PORT)
})

})
.catch((error)=>{
    console.log(error)
})

