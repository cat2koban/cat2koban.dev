import matter from 'gray-matter'
import PostType from '../types/post'

const API_TOKEN = process.env.ESA_API_TOKEN
const TEAM = process.env.ESA_TEAM
const CATEGORY = process.env.ESA_CATEGORY
const BASE_ENDPOINT = `https://api.esa.io/v1/teams/${TEAM}`

async function fetchAPI(path: string, endpoint: string) {
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
  const endpoint = `${BASE_ENDPOINT}/posts`

  if (!(typeof CATEGORY === 'undefined' || CATEGORY === '')) {
    params.push(['q', `on:${CATEGORY}`])
  }

  const param = new URLSearchParams(params).toString()

  return fetchAPI(`?${param}`, endpoint)
}

function fetchAllTags() {
  const params = [['sort', 'created'], ['order', 'desc']]
  const endpoint = `${BASE_ENDPOINT}/tags`

  const param =  new URLSearchParams(params).toString()

  return fetchAPI(`?${param}`, endpoint)
}

function fetchSpecifiedPosts(tag: string) {
  const params = [[`q=tag%3A${tag}`]]
  const endpoint = `${BASE_ENDPOINT}/posts`
  return fetchAPI(`?${params}`, endpoint)
}

function mapPost(post: PostType, fields: string[] = []) {
  const {data, content} = matter(post.body_md)
  type Items = {
    [key: string]: string | string[]
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
      case 'tags':
        items[field] = post.tags
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
  const posts = data.posts.map((post: PostType) => mapPost(post, fields))
  return posts.filter((post: PostType) => post.slug === slug)[0]
}

export async function getAllPosts(fields: string[] = []) {
  const data = await fetchAllPosts()
  return data.posts.map((post: PostType) => mapPost(post, fields))
}

export async function getAllTags() {
  const data = await fetchAllTags()
  return data.tags
}

export async function getAssociatedPosts(tag: string, fields: string[] = []) {
  const data = await fetchSpecifiedPosts(tag)
  return data.posts.map((post: PostType) => mapPost(post, fields))
}