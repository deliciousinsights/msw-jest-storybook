import { getPosts } from './api'

buildHTML()

async function buildHTML() {
  const posts = await getPosts()
  const postsRows = posts.map(
    ({ id, title }) =>
      `<tr><td>${id}</td><td class="mdl-data-table__cell--non-numeric">${title}</td></tr>`
  )

  document.getElementById('app').innerHTML = `
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--10-col mdl-cell--12-col-tablet">
      <h1>Jest and MSW sandbox</h1>
      <p>
        Please have a look at the source code to know more about the way it works.
      </p>
      <p>
        The data you can see are loaded from <a href="https://jsonplaceholder.typicode.com/guide/">jsonplaceholder.typicode.com</a>.
      </p>
      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <tbody>${postsRows.join('')}</tbody>
      </table>
    </div>
  </div>
  `
}
