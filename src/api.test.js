import { NEW_POST, POSTS, UNKNOWN_POST_ID } from './mocks/fixtures'
import { createPost, getPost, getPosts } from './api'

describe('Posts', () => {
  it('loads all posts', async () => {
    const posts = await getPosts()

    expect(posts).toEqual(POSTS)
  })

  it('loads the targeted post', async () => {
    const id = 1
    const post = await getPost(id)

    expect(post).toEqual({ ...POSTS[0], id })
  })

  it('fails to load an unknown post', async () => {
    const post = await getPost(UNKNOWN_POST_ID)

    expect(post).toEqual({
      error: `Could not find post #${UNKNOWN_POST_ID}`,
    })
  })

  it('creates a post', async () => {
    const newPost = await createPost(NEW_POST)

    expect(newPost).toEqual(NEW_POST)
  })
})
