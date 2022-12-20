const Workout=require("../models/workoutModel")
const mongoose=require("mongoose")
// get all workouts 
const getWorkout= async (req,res)=>{
    const workouts= await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}
// get single workouts
const singleWorkout=async (req,res)=>{
    const id =req.params.id
    // console.log(req.params.id)
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout"})
    }
    
    const workout=await Workout.findById(id)
    if(!workout){
       return res.status(404).json({error: "no such workout"})
    }
    res.status(200).json(workout)
}


// create new workout
const createWorkout = async (req,res)=>{
    const {title,load,reps}=req.body
    
    const emptyFields=[]
    
    if(!title)
    {
        emptyFields.push("title")
    }
    if(!load)
    {
        emptyFields.push("load")
    }
    if(!reps)
    {
        emptyFields.push("reps")
    }
    
    if(emptyFields.length>0)
    {
        res.status(404).json({error: "Please fill in all the details",emptyFields})
    }
    // add doc to db
    try{
        const workout = await Workout.create({title,load ,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    
}


// delete a workout 
const deleteWorkout=async(req,res)=>{
    const { id } = req.params
    // console.log(id)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

 return res.status(202).json(workout)
  
  
}

// update a workout 
const updateWorkout=async(req,res)=>{
    const id =req.params.id
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout"})
    }
    
    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
  
    if(!workout){
        return  res.status(404).json({error: "no such workout"})
    }
    
    res.status(404).json(workout)
}


module.exports={getWorkout,createWorkout,singleWorkout,deleteWorkout,updateWorkout}