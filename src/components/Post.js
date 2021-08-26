import { getPost } from '../api'

export default function Post({ id }) {
  // Because the API call is async and Storybook doesn't handle this in a
  // seamless way, our component synchronously returns the DOM container and
  // internally calls the async code that will populate it when data are in.
  const container = document.createElement('div')

  loadPost()

  return container

  async function loadPost() {
    const { body, title } = await getPost(id)
    container.className = 'demo-card-wide mdl-card mdl-shadow--2dp'
    container.insertAdjacentHTML(
      'beforeend',
      `
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">${title}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      ${body}
    </div>
  `
    )
  }
}
