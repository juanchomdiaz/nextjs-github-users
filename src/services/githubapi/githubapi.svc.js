import axios from 'axios';

import getConfig from 'next/config';

const {
    publicRuntimeConfig: { githubBaseApiURL, usersEndpointBasePath, perPageParamName, userPerPage },
  } = getConfig();


const githubapiService = {
  getUsers: async (url='') => {
    try {
      if(url === '') {
        //Call to first page url example: https://api.github.com/users?per_page=12
        url = `${githubBaseApiURL}${usersEndpointBasePath}?${perPageParamName}=${userPerPage}`;
      }

      const usersResponse = await axios.get(url);

      const users = usersResponse.data;

      return users;
    } catch (error) {
      return console.log(error.status);
    }
  },
};

export default githubapiService;