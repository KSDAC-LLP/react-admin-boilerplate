import UserActionTypes from './user.types';

export const setToken = (token) => ({
  type: UserActionTypes.SET_TOKEN,
  payload: token
})

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

export const setCurrentUserName = (name) => ({
  type: UserActionTypes.SET_CURRENT_USER_NAME,
  payload: name
})

export const logout = () => ({
  type: UserActionTypes.LOGOUT
})