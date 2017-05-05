import React from 'react'

import mobx from 'mobx'

import { render } from 'react-dom'

import { observer } from 'mobx-react'

const Comp = observer(() => <div>
  <h1>hello world</h1>
</div>)


// Meteor.startup(function () {

//   Meteor.loginWithPassword('demo', 'demo')

//   Meteor.autorun(function () {

//     console.log(Meteor.status(), Meteor.connection._lastSessionId)

//     console.log('user id', Meteor.userId(), 'user', Meteor.user(), 'logging in', Meteor.loggingIn())

//   })

//   Meteor.subscribe('test')

//   render(<Comp /> , $('#app')[0])

// })

// import Flow from '@flowjs/flow.js'

// const r = new Flow({
//   target: 'http://localhost:3000/upload',
//   fileParameterName: 'test',
// })

// Template.form.events({
//   submit(e) {
//     e.preventDefault()
//   },

//   'change #uploader'(e) {
//     const { files } = e.currentTarget

//     r.on('fileAdded', (file) => {
//       console.log(file)
//       r.upload()
//     })

//     r.on('catchAll', (e) => {
//       console.log(e)
//     })

//     Array.from(files).forEach(file => {
//       r.addFile(file)
//     })
//   }
// })

// Meteor.subscribe('test')
