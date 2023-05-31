const express = require('express');
const authController = require('../../controllers/user/authController');
const userController = require('../../controllers/user/userController')
const verifyToken = require('../../middleware/verifyToken');
const router = express.Router();


//register
router.post('/user/register', authController.register)

//login
router.post('/user/login', authController.login)

//logout
router.post('/user/logout', verifyToken, authController.logout)

//get one | play and add to history
router.post('/user/play/:id', verifyToken, userController.getMusic)

//get history
router.get('/user/history', verifyToken, userController.getHistory)

//add song to your list
router.post('/user/yourlist/add', verifyToken, userController.addMToYourList)

//delete song in your list
router.delete('/user/yourlist/delete', verifyToken, userController.deleteMusicYourList)

//get your list
router.get('/user/yourlist', verifyToken, userController.getYourList)





//add playlist
router.post('/user/addplaylist', verifyToken, userController.addPlaylist)

//add music to playlist
router.post('/user/playlist/add', verifyToken, userController.addMusicToPlaylist)

//show all playlist
router.get('/user/playlist', verifyToken, userController.getPlaylist)



module.exports = router;
