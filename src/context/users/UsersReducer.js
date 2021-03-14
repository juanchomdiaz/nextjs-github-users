import {
  LOAD_USERS_START,
  LOAD_USERS_READY,
  FETCH_NEXT_CLICKED,
  FETCH_PREVIOUS_CLICKED,
} from './UsersTypes';

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
        currentUrl: action.payload.currentUrl,
        withError: action.payload.withError,
        isReady: true,
      };
    case FETCH_NEXT_CLICKED:
    case FETCH_PREVIOUS_CLICKED:
      return {
        ...state,
        previousUrlsStack: action.payload.newPreviousUrlsStack,
      };
    default:
      return state;
  }
};

export default UsersReducer;
