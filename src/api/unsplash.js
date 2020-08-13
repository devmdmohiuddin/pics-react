import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID NCaSA-HsOdLkzBHS6_TiEpb7Qgi3RYt7no4oNBhT0PA'
  }
})