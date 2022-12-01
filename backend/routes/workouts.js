const express = require('express')
const {getWorkout, createWorkout, singleWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const router= express.Router()


// Get all workouts 
router.get('/',getWorkout)

// Get single workout
router.get('/:id',singleWorkout)

// POST a new workout
router.post('/',createWorkout)

// Delete a workout
router.delete('/:id',deleteWorkout)

// Update a workout
router.patch('/:id',updateWorkout)

module.exports = router