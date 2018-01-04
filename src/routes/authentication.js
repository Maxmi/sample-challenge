import express from 'express'

import {
  signUp,
  signIn,
} from '../actions'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up')
})

router.post('/sign-up', (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body

  signUp(name, email, password)
    .then(user => res.redirect('/'))
    .catch(next)
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in')
})

export default router
