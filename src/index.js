import Posts from './components/Posts'

buildHTML()

function buildHTML() {
  const app = document.getElementById('app')
  const updatedApp = document.createElement('div')
  updatedApp.id = 'app'
  updatedApp.appendChild(Posts())
  const container = app.parentNode
  container.replaceChild(updatedApp, app)
}
