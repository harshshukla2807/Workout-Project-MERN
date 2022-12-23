// this file is made so that we dont have to use useContext function again in different files to use workoutContext.Provider's arguments, we can just call it here once and store in context variable and hence use useWorkoutContext function

import { WorkoutsContext } from "../context/WorkoutsContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
} 