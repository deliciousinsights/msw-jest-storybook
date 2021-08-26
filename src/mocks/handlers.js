import { NEW_POST, POSTS, UNKNOWN_POST_ID } from './fixtures'

import { POST_BASE_URL } from '../api'
import { rest } from 'msw'

export const handlers = [
  // Get all posts
  rest.get(POST_BASE_URL, (req, res, ctx) => res(ctx.json(POSTS))),

  // Get a single post
  rest.get(`${POST_BASE_URL}/:id`, (req, res, ctx) => {
    const id = Number(req.params.id)

    if (id === UNKNOWN_POST_ID) {
      return res(
        ctx.status(403),
        ctx.json({
          error: `Could not find post #${id}`,
        })
      )
    }

    return res(ctx.json({ ...POSTS[0], id }))
  }),

  // Create a post
  rest.post(POST_BASE_URL, (req, res, ctx) => {
    return res(ctx.json(NEW_POST))
  }),
]
