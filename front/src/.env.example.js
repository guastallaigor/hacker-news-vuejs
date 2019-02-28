export default {
  BASE_API: `${process.env.NODE_ENV === 'production' ? 'api/public/v1' : ''}`,
}
