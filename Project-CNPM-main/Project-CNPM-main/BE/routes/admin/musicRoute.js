const express = require('express');
const musicController = require('../../controllers/admin/musicController');
const router = express.Router();

// Get All
router.get('/admin/music', musicController.getMusics)

//Create
router.post('/admin/music', musicController.addMusic)

//Update
router.put('/admin/music/:id', musicController.updateMusic)

//Delete
router.delete('/admin/music/:id', musicController.deleteMusic)

module.exports = router;
