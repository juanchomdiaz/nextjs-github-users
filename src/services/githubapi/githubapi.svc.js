/* API calls to github relies on this service. 
This could be improved in future, for example implementing octokit
or making the calls to a proxy in order to hide github's auth token in browser requests. */

import Axios from 'axios';

import linkHeaderParser from 'parse-link-header';

import getConfig from 'next/config';

const {
  publicRuntimeConfig: { githubBaseApiURL, usersEndpointBasePath, perPageParamName, userPerPage, githubAuthToken },
} = getConfig();

/* THIS IS UNSAFE. GITHUB TOKEN WILL BE AVAILABLE IN BROWSER REQUEST */
const axios = Axios.create({ headers: { Authorization: githubAuthToken } }); 

const githubapiService = {
  //https://docs.github.com/en/rest/reference/users#list-users
  //https://docs.github.com/en/rest/overview/resources-in-the-rest-api#link-header

  getUsers: async (url = '') => {
    try {
      if (url === '') {
        //Call to first page url, example: https://api.github.com/users?since=0&per_page=12
        url = `${githubBaseApiURL}${usersEndpointBasePath}?since=0&${perPageParamName}=${userPerPage}`;
      }

      const usersResponse = await axios.get(url);

      const users = usersResponse.data;

      const parsedLinkHeader =
        usersResponse.headers.link && linkHeaderParser(usersResponse.headers.link);

      const nextUrl = parsedLinkHeader.next.url || '';

      /* For some reason, github's api is not returning a 
      previous url in link header, so I have to return current url*/
      const currentUrl = url;

      return {
        users,
        nextUrl,
        currentUrl,
        withError: false,
      };
    } catch (error) {
      return {
        users: [],
        nextUrl: '',
        currentUrl: '',
        withError: true,
      };
    }
  },
  getUserDetails: async (username = '') => {
    try {
      if (username === '') throw new Error();

      let url = `${githubBaseApiURL}${usersEndpointBasePath}/${username}`;

      const userResponse = await axios.get(url);

      const userDetails = userResponse.data;

      return {
        userDetails,
        withError: false,
      };
    } catch (error) {
      console.log(error);
      return { userDetails: {}, withError: true };
    }
  },
};

export default githubapiService;
