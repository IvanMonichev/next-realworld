const config = {
  siteName: 'Next Real World',
  siteDescription:
    'Next.js сodebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API',
  baseApi: 'https://api.realworld.io/api',
  nameToken: 'userToken',
  navigations: [
    {
      name: 'Home',
      patch: '/'
    },
    {
      name: 'Sign In',
      patch: '/sign-in'
    },
    {
      name: 'Sign Up',
      patch: '/sign-up'
    }
  ]
}

export default config
