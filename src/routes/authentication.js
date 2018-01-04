import express from 'express'

import {
  signUp,
  signIn,
} from '../actions'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up', {
    error: '',
  })
})

router.post('/sign-up', (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body

  if (!name || !email || !password) {
    res.render('authentication/sign-up', {
      error: 'All fields required!'
    })
  } else {
    signUp(name, email, password)
      .then(user => res.redirect('/'))
      .catch(next)
  }
})


router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {
    error: '',
  })
})


router.post('/sign-in', (req, res, next) => {
  const {
    email,
    password,
  } = req.body

  if (!email || !password) {
    res.render('authentication/sign-in', {
      error: 'Both fields required!',
    })
  } else {
    signIn(email, password)
      .then(() => {
        res.redirect('/')
      })
      .catch((next) => {
        res.render('authentication/sign-in', {
          error: 'Wrong email or password.',
        })
      })
  }
})


export default router
