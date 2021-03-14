module.exports = {
    publicRuntimeConfig: {
      githubBaseApiURL: 'https://api.github.com', /* I can read variables from process.env here. Useful in multiples environments. */
      userPerPage: 10,
      usersEndpointBasePath: '/users',
      perPageParamName: 'per_page',
      githubAuthToken: '7731bcb3c2524823f855e235327766e2113cb76e' /* THIS IS UNSAFE. THIS MUST TO BE SAVED IN A SECRET */
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/users',
          permanent: false,
        },
      ];
    },
};