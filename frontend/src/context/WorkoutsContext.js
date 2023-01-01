import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        workouts: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        workouts: [action.payload, ...state.workouts] 
      }
    case 'DELETE_WORKOUT':
    return {
      workouts: state.workouts.filter((w)=>w._id!== action.payload._id)
    }
    default:
      return state
  }
}
 
export const WorkoutsContextProvider = ({ children }) => {
  // const [workouts,setWorkouts]=useState({workouts:null})
  // const [workouts,createWorkouts]=useState({workouts:null})
  // const [workouts,deleteWorkouts]=useState({workouts:null})
  
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null
  })
  // how to do this with useState
  
  
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}