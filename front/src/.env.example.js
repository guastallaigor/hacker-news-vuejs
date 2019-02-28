export default {
  API: `${process.env.NODE_ENV === 'production' ? 'api/public/v1' : ''}`
}
