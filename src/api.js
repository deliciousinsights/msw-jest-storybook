import fetch from 'cross-fetch'

export const POST_BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export function getPosts() {
  return jsonFetch(POST_BASE_URL)
}

export function getPost(id) {
  return jsonFetch(`${POST_BASE_URL}/${id}`)
}

export function createPost(data) {
  return post(POST_BASE_URL, data)
}

export function deletePost(id) {
  return drop(`${POST_BASE_URL}/${id}`)
}

export function patchPost(data) {
  return drop(`${POST_BASE_URL}/${data.id}`, data)
}

// -----
// Utils
// -----
function jsonFetch(url, body = {}) {
  return fetch(url, body).then((response) => response.json())
}

function makeJSONCall(name, method = name.toUpperCase()) {
  const result = function (url, body, options = {}) {
    return jsonFetch(url, { body, method, ...options })
  }
  result.displayName = name
  return result
}

export const drop = makeJSONCall('drop', 'DELETE')
export const get = makeJSONCall('get')
export const patch = makeJSONCall('patch')
export const post = makeJSONCall('post')
export const put = makeJSONCall('put')
