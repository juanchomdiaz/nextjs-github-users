module.exports = {
    publicRuntimeConfig: {
      githubBaseApiURL: 'https://api.github.com', /* I can read variables from process.env here. Useful in multiples environments. */
      userPerPage: 10,
      usersEndpointBasePath: '/users',
      perPageParamName: 'per_page'
    },
};