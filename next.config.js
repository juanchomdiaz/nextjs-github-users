module.exports = {
    publicRuntimeConfig: {
      apiBaseUrl: 'https://expressjs-reverse-proxy.herokuapp.com',
      usersPerPage: 9,
      usersEndpointBasePath: '/users',
      perPageParamName: 'per_page'
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
