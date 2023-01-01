import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from "../hooks/useAuthContext"

const WorkoutDetails = ({ workout }) => {
  
  const {dispatch}=useWorkoutsContext()
  const {user}=useAuthContext()
  
  const handleDelete=async ()=>{
 
 if(!user){
   return
 }
 
//  for backend
      const response= await fetch('/api/workouts/'+ workout._id ,{
       method: 'POST',
       headers:{
         "authorization":  `Bearer ${user.token}`
        } 
      })
      
      const json = await response.json()
      
//for frontend 
      if(response.ok){
        dispatch({type: 'DELETE_WORKOUT',payload:json})
      }
    } 
    // console.log(response)
  

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
      <span className="material-symbols-outlined" onClick={handleDelete}>Delete</span>
    </div>
  )
}

export default WorkoutDetails