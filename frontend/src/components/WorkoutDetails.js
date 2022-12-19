import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({ workout }) => {
  
  const {dispatch}=useWorkoutsContext()
  
  const handleDelete=async ()=>{
 
      const response= await fetch('/api/workouts/'+ workout._id ,{
        method: 'POST'
      })
      
      const json = await response.json()
      
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
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>Delete</span>
    </div>
  )
}

export default WorkoutDetails