import { getPosts } from './api'

buildHTML()

async function buildHTML() {
  const posts = await getPosts()
  const postsRows = posts.map(
    ({ id, title }) =>
      `<tr><td>${id}</td><td class="mdl-data-table__cell--non-numeric">${title}</td></tr>`
  )

  document.getElementById('app').innerHTML = `
    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <tbody>${postsRows.join('')}</tbody>
    </table>
  `
}
