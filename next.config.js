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
    async rewrites() {
      return [
        {
          source: '/api/users',
          destination: `${process.env.PROXY_BASE_URL}/users`
        },
        {
          source: '/api/users/:username',
          destination: `${process.env.PROXY_BASE_URL}/users/:username`, 
        },
      ]
    },
};
