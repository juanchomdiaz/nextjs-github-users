/* 
API calls to github relies on this service. 
This "service" provides an unique API for fetching APP data.
This could be easily improved in future, for example: implementing 
octokit.
*/

import Axios from 'axios';

import linkHeaderParser from 'parse-link-header';

import getConfig from 'next/config';

import { replaceBaseApiUrl } from '@helpers/url';

const githubapiService = (() => {

  let {
    publicRuntimeConfig: { apiBaseUrl, usersEndpointBasePath, perPageParamName, usersPerPage },
  } = getConfig();
  
  //SSR workaround
  if(typeof(apiBaseUrl) === 'undefined') apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const axios = Axios.create(); 

  const parseNextPageLink = (linkHeader) => {
    if(linkHeader === '') return '';

    let parsedLinkHeader = linkHeaderParser(linkHeader);

    let responseNextUrl = (parsedLinkHeader.next && parsedLinkHeader.next.url) || '';

    return replaceBaseApiUrl(responseNextUrl, apiBaseUrl);
  }

  //https://docs.github.com/en/rest/reference/users#list-users
  //https://docs.github.com/en/rest/overview/resources-in-the-rest-api#link-header
  const getUsers = async (url = '') => {
    try {
      if (url === '') {
        //Call to first page url, example: https://api-or-proxy-url/users?since=0&per_page=12
        url = `${apiBaseUrl}${usersEndpointBasePath}?since=0&${perPageParamName}=${usersPerPage}`;
      }

      let usersResponse = await axios.get(url);

      let users = usersResponse.data;

      let nextUrl = parseNextPageLink(usersResponse.headers.link || '');

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
      console.log(error);

      return {
        users: [],
        nextUrl: '',
        currentUrl: '',
        withError: true,
      };
    }
  };

  const getUserDetails = async (username = '') => {
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
      //console.log(error);
      return { userDetails: {}, withError: true };
    }
  };

  return {
    getUsers,
    getUserDetails
  }
})();

export default githubapiService;
