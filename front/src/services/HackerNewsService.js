import http from './http'

class HackerNewsService {
  constructor () {
    this.topStories = 'top-stories'
    this.baseStories = 'base-stories'
    this.newStories = 'new-stories'
  }

  getTopStories(params) {
    return http.get(this.topStories, { params })
  }

  getBaseStories(params) {
    return http.get(this.baseStories, { params })
  }

  getNewStories(params) {
    return http.get(this.newStories, { params })
  }
}

const hackerNewsService = new HackerNewsService()
export default hackerNewsService
