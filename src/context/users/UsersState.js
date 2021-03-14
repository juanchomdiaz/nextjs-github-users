import React, { useReducer } from "react";

import UsersContext from "./UsersContext";
import UsersReducer from "./UsersReducer";

import {
  LOAD_USERS_START,
  LOAD_USERS_READY,
} from "./UsersTypes";

import githubapiService from '@services/githubapi';

import getConfig from 'next/config';

const { publicRuntimeConfig: { userPerPage } } = getConfig();

const UsersState = ({ usersCount, users, children }) => {
  const initialState = {
    withError: false,
    isReady: true,
    users: users,
    currentUser: null,
    usersCount: usersCount,
    nextUrl: '',
    prevUrl: '',
    firstUrl: '',
    lastUrl: '',
    canNext: true,
    canPrevious: false
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const loadUsers = async (url) => {
    dispatch({
      type: LOAD_USERS_START,
    });

    let {users, nextUrl, prevUrl, lastUrl, firstUrl, withError} = await githubapiService.getUsers(url, userPerPage);

    dispatch({
      type: LOAD_USERS_READY,
      payload: {
        users, 
        nextUrl,
        prevUrl, 
        lastUrl, 
        firstUrl,
        withError,
        canNext: (nextUrl !== ''),
        canPrevious: (prevUrl !== '')
      },
    });
  }

  return (
    <UsersContext.Provider
      value={{
        withError: state.withError,
        isReady: state.isReady,
        users: state.users,
        canPrevious: state.canPrevious,
        canNext: state.canNext,
        loadUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersState;
