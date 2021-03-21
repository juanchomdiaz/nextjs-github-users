## GitHub Users Browser

A multilanguage Github Users Browser made with NextJS 10, ReactJs 17, hooks, Context API, i18next, react-bootstrap, skeleton loading and jest + enzyme.

See it running live in Heroku: https://github-users-browser.herokuapp.com/users

CHECK THIS PR: https://github.com/juanchomdiaz/nextjs-github-users/pull/1

### Before running
Create a .env.local file using the .env.local.example file as the template. Create a Github Auth Token and set in your .env.local file.
Documentation about creating a github token [is here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
### How to run?

- npm install

- npm run dev
## Note for npm v7 users
Enzyme's dependencies have not yet been updated to declare React 17 in peerDependencies. You need to add --legacy-peer-deps to the install command for it to work correctly.

### How to test?

- npm run test


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

