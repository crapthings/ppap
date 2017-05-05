const deviceMap = {}

Meteor.methods({
  ___MapSessionId(id, sessionId) {
    deviceMap[sessionId] = id
  }
})

Meteor.setInterval(function () {
  console.log(deviceMap)
}, 2000)
