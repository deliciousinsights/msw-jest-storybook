import { getPosts } from '../api'

export default function Posts() {
  // Because the API call is async and Storybook doesn't handle this in a
  // seamless way, our component synchronously returns the DOM container and
  // internally calls the async code that will populate it when data are in.
  const container = document.createElement('div')

  loadPosts()

  return container

  async function loadPosts() {
    const posts = await getPosts()

    if (posts.length === 0) {
      return document.createTextNode('No post was found')
    }

    const table = document.createElement('table')
    table.className =
      'mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp'
    const postsRows = posts.map(
      ({ id, title }) =>
        `<tr><td>${id}</td><td class="mdl-data-table__cell--non-numeric">${title}</td></tr>`
    )

    table.insertAdjacentHTML(
      'beforeend',
      `<tbody>${postsRows.join('')}</tbody>`
    )

    container.appendChild(table)
  }
}
