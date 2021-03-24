const aws = require('aws-sdk');

let s3 = new aws.S3({
  apiBaseUrl: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN,
  proxyBaseUrl: process.env.PROXY_BASE_URL
});

module.exports = {
    publicRuntimeConfig: {
      apiBaseUrl: s3.apiBaseUrl || process.env.NEXT_PUBLIC_API_BASE_URL,
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
          destination: `${s3.proxyBaseUrl || process.env.PROXY_BASE_URL}/users`
        },
        {
          source: '/api/users/:username',
          destination: `${s3.proxyBaseUrl || process.env.PROXY_BASE_URL}/users/:username`, 
        },
      ]
    },
};
