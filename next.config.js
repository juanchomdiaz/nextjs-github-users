const aws = require('aws-sdk');

let s3 = new aws.S3({
  githubAuthToken: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN, /* THIS SAVED IN HEROKU ENV VAR */
});

module.exports = {
    publicRuntimeConfig: {
      githubBaseApiURL: 'https://api.github.com',
      userPerPage: 9,
      usersEndpointBasePath: '/users',
      perPageParamName: 'per_page',
      githubAuthToken: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN || s3.githubAuthToken || ''
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