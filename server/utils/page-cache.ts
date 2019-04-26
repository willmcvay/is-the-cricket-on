import * as cache from 'lru-cache'
import { Request, Response } from 'express'
import { Server } from 'next'

const ssrCache = new cache({
  max: 20, // not more than 20 results will be cached
  maxAge: 1000 * 60 * 2 // 2mins
})

const pageCache = async (
  req: Request,
  res: Response,
  app: Server,
  pagePath: string,
  queryParams?: Record<string, string | string[] | undefined>
) => {
  const key = req.url

  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    console.log('RETRIEVING FROM PAGE CACHE FOR', key)
    return
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    ssrCache.set(key, html)
    console.log('SETTING PAGE CACHE FOR', key)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams).catch(err => console.error(err.message))
  }
}

export default pageCache
