/* 
API calls to github relies on this service. 
This "service" provides an unique API for fetching APP data.
This could be easily improved in future, for example: implementing 
octokit.
*/

import Axios from 'axios';

import linkHeaderParser from 'parse-link-header';

import getConfig from 'next/config';

import { replaceHostname } from '@helpers/url';

const {
  publicRuntimeConfig: { apiBaseUrl, usersEndpointBasePath, perPageParamName, usersPerPage },
} = getConfig();

const axios = Axios.create(); 

const githubapiService = {
  //https://docs.github.com/en/rest/reference/users#list-users
  //https://docs.github.com/en/rest/overview/resources-in-the-rest-api#link-header
  getUsers: async (url = '') => {
    try {
      if (url === '') {
        //Call to first page url, example: https://api.github.com/users?since=0&per_page=12
        url = `${apiBaseUrl}${usersEndpointBasePath}?since=0&${perPageParamName}=${usersPerPage}`;
      }

      let usersResponse = await axios.get(url);

      let users = usersResponse.data;

      let parsedLinkHeader =
        usersResponse.headers.link && linkHeaderParser(usersResponse.headers.link);

      let responseNextUrl = (parsedLinkHeader.next && parsedLinkHeader.next.url) || '';

      let nextUrl = replaceHostname(responseNextUrl, apiBaseUrl);

      /* For some reason, github's api is not returning a 
      previous url in link header, so I have to return current url*/
      let currentUrl = url;

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

      let url = `${apiBaseUrl}${usersEndpointBasePath}/${username}`;

      let userResponse = await axios.get(url);

      let userDetails = userResponse.data;

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
