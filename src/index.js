import Posts from './components/Posts'

// Enable API mocking only in development.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

buildHTML()

function buildHTML() {
  const app = document.getElementById('app')
  const updatedApp = document.createElement('div')
  updatedApp.id = 'app'
  updatedApp.appendChild(Posts())
  const container = app.parentNode
  container.replaceChild(updatedApp, app)
}
