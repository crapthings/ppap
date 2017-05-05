const _key = '_uniqs'

Meteor.startup(function () {
  const id = setRandomIdOnce()
  if (id) sendRandomId(id)
})

function getRandomId() {
  return localStorage.getItem(_key)
}

function setRandomId() {
  const _uniqs = Random.id()
  localStorage.setItem(_key, _uniqs)
  return _uniqs
}

function setRandomIdOnce() {
  const _uniqs = localStorage.getItem(_key)
  return _uniqs ? _uniqs : setRandomId()
}

function sendRandomId(id) {
  return Meteor.autorun(function () {
    const status = Meteor.status()
    if (status.status === 'connected') {
      getLastSessionId(id)
    }
  })
}

function getLastSessionId(id) {
  const { _lastSessionId } = Meteor.connection
  _lastSessionId
    ? Meteor.call('___MapSessionId', id, _lastSessionId)
    : Meteor.defer(function () { getLastSessionId(id) })
}
