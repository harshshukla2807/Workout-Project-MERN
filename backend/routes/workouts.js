const express = require('express')
const {getWorkout, createWorkout, singleWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const requireAuth=require("../middleware/requireAuth")



const router= express.Router()

// require auth for all workout routes
router.use(requireAuth)

// Get all workouts 
router.get('/',getWorkout)

// Get single workout
router.get('/:id',singleWorkout)

// POST a new workout
router.post('/',createWorkout)

// Delete a workout
router.post('/:id',deleteWorkout)

// Update a workout
router.patch('/:id',updateWorkout)

module.exports = router