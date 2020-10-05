const express = require("express");
const router = express.Router();

const {addUser, getHighScore} = require('../Controllers/user_controller');

router.post('/addUser', addUser); //POST
router.get('/getHighScore',getHighScore);//GET gighscore route

module.exports = router;
