import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
})

export const apiMarvel = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
})
