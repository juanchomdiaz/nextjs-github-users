import {
    LOAD_USERS_START,
    LOAD_USERS_READY,
  } from "./UsersTypes";
  
  const UsersReducer = (state, action) => {
    switch (action.type) {
      case LOAD_USERS_START:
        return {
          ...state,
          isReady: false,
        };
      case LOAD_USERS_READY:
        return {
          ...state,
          users: action.payload.users, 
          nextUrl: action.payload.nextUrl,
          prevUrl: action.payload.prevUrl, 
          withError: action.payload.withError,
          canNext: action.payload.canNext,
          canPrevious: action.payload.canPrevious
        };
      case LOAD_POKEMONS_ERROR:
        return {
          ...state,
          withError: true,
          isReady: false,
          users: []
        };
      default:
        return state;
    }
  };
  
  export default UsersReducer;
  