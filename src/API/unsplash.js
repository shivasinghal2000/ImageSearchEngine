import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6IwqvfzVJJUu_Kv0wm3UlyGbfOadlYMgZPPhspAbYW0'
  }
})
