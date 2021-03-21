module.exports = {
    publicRuntimeConfig: {
      githubBaseApiURL: 'https://expressjs-reverse-proxy.herokuapp.com/proxy',
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
