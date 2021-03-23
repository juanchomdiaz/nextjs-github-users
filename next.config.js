module.exports = {
    publicRuntimeConfig: {
      apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
      usersPerPage: 9,
      usersEndpointBasePath: '/users',
      perPageParamName: 'per_page',
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
