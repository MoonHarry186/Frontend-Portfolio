import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: '2024-04-16',
  dataset: 'production',
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN
})

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || '',
  dataset: 'production',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}

