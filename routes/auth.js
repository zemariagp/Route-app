const express = require('express');
const router  = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User');
const {Mongoose} = require('mongoose');

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  //has the password and install bcrypt.js if you haven't already
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(password, salt);
  if (username === '' || password === '') {
    res.render('auth/signup', 
    { 
      errorMessage: 'Indicate username and password'
    });
    return;
  }

  //regular expression validation - regExr.com to build expressions on checking if email addresses are valid. stackexchange had one.
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.render('auth/signup', 
    {
      errorMessage: 'Password not meeting criteria for creation'
    });
    return;
  }

  User.findOne({'username': username})
    .then((user) => {
      if(user) { // this means - user!== undefined
        res.render('auth/signup', {
          errorMessage: 'The username already exists'
        });
        return; 
      }
    
    })

    User.create({ username, email, password: hashPassword }) //be sure you're not saving their real password! this is password equal to hashPassword.
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => {
        // res.render('auth/signup', {
        //   errorMessage: error //a lot of dev's use this and its fine but not fancy
        // })
        if(error.code === 11000 ) {
          res.render('auth/signup', {
            errorMessage: 'Username and email need to be unique'
          })
        }
      })
});

router.get('/login', (req, res) => {
  res.render('auth/login')
})

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.render('auth/login', {
      errorMessage: 'Please enter both username and password'
    });
    return;
  }
  User.findOne({'username': username})
    .then((user) => {
      if(!user) {
        res.render('auth/login', {
          errorMessage: 'Invalid login'
        })
        //User doesn't exist on the database
        return;
      }
      if (bcrypt.compareSync(password, user.password)) {
        //Logged in sucessfully
        res.render('index', { user })
       
      } else {
        //Passwords don't match
        res.render('auth/login', {
          errorMessage: 'Invalid login'
        });
      }
    });
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
