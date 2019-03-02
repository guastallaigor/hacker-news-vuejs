import http from './http'

class HackerNewsService {
  constructor () {
    this.topStories = 'top-stories'
    this.bestStories = 'best-stories'
    this.newStories = 'new-stories'
    this.user = 'user'
  }

  getTopStories (params) {
    return http.get(this.topStories, { params })
  }

  getBestStories (params) {
    return http.get(this.bestStories, { params })
  }

  getNewStories (params) {
    return http.get(this.newStories, { params })
  }

  getUser (id) {
    return http.get(`${this.user}/${id}`)
  }
}

const hackerNewsService = new HackerNewsService()
export default hackerNewsService
