import { useState } from "react"

const WorkoutForm=()=>{
    // states
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState('')
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        
         const workout={title ,load,reps}
         
         const response= await fetch('/api/workouts',{
             method:'POST',
             body: JSON.stringify(workout),
             headers:{
                 'Content-type':'application/json'
             }
         })
         console.log(response)
         const json= await response.json();
         
         if(!response.ok){
             setError(json.error)
         }
         else{
             setError(null)
             setTitle('')
             setLoad('')
             setReps('')
             console.log("New workout added",json)
             
         }
    }
    
    return(
        <form  className="create" onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>
        <label >Exercise title:</label>
        <input
           type="text"
           onChange={(e)=> setTitle(e.target.value)}
           value={title}
        />
        <label >Load value:</label>
        <input 
           type="text"
           onChange={(e)=> setLoad(e.target.value)}
           value={load}
        />
        <label >Exercise title:</label>
        <input 
           type="text"
           onChange={(e)=> setReps(e.target.value)}
           value={reps}
        />
        
        <button>Add workout</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
        
    
}

export default WorkoutForm 