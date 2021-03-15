const aws = require('aws-sdk');

let s3 = new aws.S3({
  githubAuthToken: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN,
});

module.exports = {
    publicRuntimeConfig: {
      githubBaseApiURL: 'https://api.github.com', /* I can read variables from process.env here. Useful in multiples environments. */
      userPerPage: 9,
      usersEndpointBasePath: '/users',
      perPageParamName: 'per_page',
      githubAuthToken: s3.githubAuthToken /* THIS SAVED IN HEROKU ENV VAR */
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