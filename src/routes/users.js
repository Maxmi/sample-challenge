import express from 'express'

import {
  getUser,
  updateUser,
} from '../actions'

const router = express.Router()

router.get('/users/:userID', (req, res, next) => {
  const userID = parseInt(req.params.userID);

  getUser(userID)
    .then(user => {
      res.render('users/profile', {
        user,
      })
    })
})


router.put('/users/:userID', (req, res, next) => {
  const userID = parseInt(req.params.userID);
  const {name, email} = req.body;

  updateUser(userID, name, email)
    .then(user => {

    })
})


export default router
