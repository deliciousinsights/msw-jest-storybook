import fetch from 'cross-fetch'

export const POST_BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export function getPosts() {
  return fetch(POST_BASE_URL).then((response) => response.json())
}

export function getPost(id) {
  return fetch(`${POST_BASE_URL}/${id}`).then((response) => response.json())
}

export function createPost(body) {
  return fetch(POST_BASE_URL, {
    body,
    method: 'post',
  }).then((response) => response.json())
}
