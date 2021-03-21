const aws = require('aws-sdk');

let s3 = new aws.S3({
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL, 
});

module.exports = {
    publicRuntimeConfig: {
      githubBaseApiURL: s3.apiBaseUrl || process.env.NEXT_PUBLIC_API_BASE_URL,
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
