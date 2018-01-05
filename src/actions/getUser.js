import db from '../db'

export default function getUser(userID) {
  return db.one('SELECT name, email FROM users WHERE name = $1 AND email = $2',  [userID])
}
