const express = require('express');
const videoController = require('../../controllers/admin/videoController');
const router = express.Router();

// Get All
router.get('/admin/video', videoController.getVideos)

//Create
router.post('/admin/video', videoController.addVideo)

//Update
// router.put('/admin/video/:id', videoController.updatevideo)

//Delete
router.delete('/admin/video/:id', videoController.deleteVideo)

module.exports = router;
