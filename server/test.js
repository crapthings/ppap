Meteor.startup(createUser)

function createUser() {
  if (hasUsers() !== true) {
    Accounts.createUser({
      username: 'demo',
      password: 'demo',
    })
  }
}

function hasUsers() {
  return Meteor.users.find().fetch().length ? true : false
}

// import express from './express'

// import cors from 'cors'

// import multer from 'multer'

// const app = express()

// const storage = multer.memoryStorage({
//   buffer(data) {
//     console.log(data)
//   }
// })

// const upload = multer({ storage: storage })

// app.use(cors())

// app.post('/upload', function (req, res, next) {
//   console.log(req)
//   res.sendStatus(200)
// })

// app.get('/upload', function (req, res, next) {
//   res.sendStatus(200)
// })

// app.listen(4000)

