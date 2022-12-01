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
    const id =req.params.id
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout"})
    }
    
    const workout= await Workout.findByIdAndDelete({_id:id})
    
    if(!workout){
        return  res.status(404).json({error: "no such workout"})
    }
    
    res.status(404).json(workout)
    
   Workout.remove(req.params.id)
   res.status(200).json(Workout)
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