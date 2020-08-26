import UserActionTypes from './user.types';

const INITIAL_STATE = {
  token: null,
  activeUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_TOKEN : {
      return {
        ...state,
        token: action.payload
      }
    }
    case UserActionTypes.SET_ACTIVE_USER : {
      return {
        ...state,
        activeUser: action.payload
      }
    }
    case UserActionTypes.SET_ACTIVE_USER_NAME : {
      let activeUser = Object.assign({}, state.activeUser);
      activeUser.name =  action.payload
      return {
        ...state,
        activeUser,
      }
    }
    case UserActionTypes.LOGOUT : {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;