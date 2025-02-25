import axios from 'axios'

const API_URL = 'http://localhost:8080'
const maptilerToken = 'seu token'

export function fetchProducts() {
  return axios (`${API_URL}/products`)
}

export function fetchLocalMapTiler(local: string) {
  return axios(`https://api.maptiler.com/geocoding/${local}.json?key=${maptilerToken}`)
}