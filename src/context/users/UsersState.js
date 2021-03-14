import React, { useReducer } from "react";

import UsersContext from "./UsersContext";
import UsersReducer from "./UsersReducer";

import {
  LOAD_USERS_START,
  LOAD_USERS_READY,
  FETCH_NEXT_CLICKED,
  FETCH_PREVIOUS_CLICKED
} from "./UsersTypes";

import githubapiService from '@services/githubapi';

const UsersState = ({ users, nextUrl, currentUrl, withError, children }) => {
  const initialState = {
    withError: withError,
    isReady: true,
    users: users,
    nextUrl: nextUrl,
    previousUrlsStack: [], 
    currentUrl: currentUrl
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const fetchNext = () => {
    let newPreviousUrlsStack = [...state.previousUrlsStack, state.currentUrl];
    
    dispatch({
        type: FETCH_NEXT_CLICKED,
        payload: {
            newPreviousUrlsStack
        }
    });

    _loadUsers(state.nextUrl);
  };

  const fetchPrevious = () => {
    let newPreviousUrlsStack = [...state.previousUrlsStack];
    let prevUrl = newPreviousUrlsStack.pop();

    dispatch({
        type: FETCH_PREVIOUS_CLICKED,
        payload: {
            newPreviousUrlsStack
        }
    });

    _loadUsers(prevUrl);
  };

  const _loadUsers = async (url) => {
    dispatch({
      type: LOAD_USERS_START,
    });

    let {users, nextUrl, currentUrl, withError} = await githubapiService.getUsers(url);

    dispatch({
      type: LOAD_USERS_READY,
      payload: {
        users, 
        nextUrl,
        currentUrl, 
        withError
      },
    });
  }

  return (
    <UsersContext.Provider
      value={{
        withError: state.withError,
        isReady: state.isReady,
        users: state.users,
        canPrevious: (state.previousUrlsStack.length !== 0),
        canNext: (state.nextUrl !== ''),
        fetchNext,
        fetchPrevious
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersState;
