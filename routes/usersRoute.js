const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs')
// const encryptedpass = require('../midlewares/Passwordmidlewere')

router.post('/login', async (req, res) => {
  const { userphone, password } = req.body;
  try {
    const user = await User.findOne({ userphone });
    // const userverified = await bcrypt.compare(password, user.password)

    if (user) {
      if (user.password == req.body.password) {
        res.send(user);
      } else {
        return res.status(400).json({ 'message': "You entred worng password" });
      }
    } else {
      return res.status(400).json({ 'message': "You are not registred" });
    }
  } catch (error) {
    return res.status(400).json({ "message": "Not registred - OR - invalid phone number" });
  }
});

router.post('/register', async (req, res) => {
  try {

    const newuser = new User({
      username: req.body.username,
      useremail: req.body.useremail,
      userphone: req.body.userphone,
      usercnic: req.body.usercnic,
      password: req.body.password

    });
    await newuser.save();
    res.send('User registered successfully');
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/getallusers', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
