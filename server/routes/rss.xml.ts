import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const siteUrl = 'https://kylemcmaster.com'
  const siteName = 'Kyle McMaster Blog'
  const siteDescription = 'Software development insights, tutorials, and experiences by Kyle McMaster. Specializing in C#, .NET, event-driven architecture, and modern software engineering practices.'

  const feed = new Feed({
    title: siteName,
    description: siteDescription,
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    image: `${siteUrl}/cover.jpg`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Kyle McMaster`,
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
    },
    author: {
      name: 'Kyle McMaster',
      link: siteUrl,
    },
  })

  const posts = await serverQueryContent(event)
    .where({ _path: { $contains: '/blog/' }, date: { $exists: true } })
    .sort({ date: -1 })
    .find()

  for (const post of posts) {
    // Skip posts without a date (shouldn't happen due to query filter, but extra safety)
    if (!post.date) continue

    const postUrl = `${siteUrl}${post._path}`
    
    feed.addItem({
      title: post.title || 'Untitled Post',
      id: postUrl,
      link: postUrl,
      description: post.description || '',
      date: new Date(post.date),
      image: post.image ? `${siteUrl}${post.image}` : undefined,
      author: [
        {
          name: 'Kyle McMaster',
          link: siteUrl,
        },
      ],
    })
  }

  setHeader(event, 'content-type', 'application/rss+xml; charset=UTF-8')
  return feed.rss2()
})
