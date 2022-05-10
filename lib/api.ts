import matter from 'gray-matter'

const API_TOKEN = process.env.ESA_API_TOKEN
const TEAM = process.env.ESA_TEAM
const CATEGORY = process.env.ESA_CATEGORY
const endpoint = `https://api.esa.io/v1/teams/${TEAM}/posts`

async function fetchAPI(path: string) {
  const res = await fetch(`${endpoint}${path}`, {
    headers: {'Authorization': `Bearer ${API_TOKEN}`}
  })

  if (!res.ok) {
    console.error(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json
}

function fetchAllPosts() {
  const params = [['sort', 'created'], ['order', 'desc'], ['q', 'wip:false']]

  if (!(typeof CATEGORY === 'undefined' || CATEGORY === '')) {
    params.push(['q', `on:${CATEGORY}`])
  }

  const param = new URLSearchParams(params).toString()

  return fetchAPI(`?${param}`)
}

function mapPost(post: any, fields: string[] = []) {
  const {data, content} = matter(post.body_md)
  type Items = {
    [key: string]: string
  }
  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    switch (field) {
      case 'slug':
        if (typeof data.slug === 'undefined') {
          throw new Error('Slug is not set.')
        }
        items[field] = data.slug
        break
      case 'content':
        items[field] = content
        break
      default:
        if (data[field]) {
          items[field] = data[field]
        }
        break
    }
  })

  return items
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const data = await fetchAllPosts()
  const posts = data.posts.map((post: any) => mapPost(post, fields))
  return posts.filter((post: any) => post.slug === slug)[0]
}

export async function getAllPosts(fields: string[] = []) {
  const data = await fetchAllPosts()
  return data.posts.map((post: any) => mapPost(post, fields))
}
