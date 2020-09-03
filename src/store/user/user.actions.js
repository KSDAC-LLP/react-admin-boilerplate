import UserActionTypes from './user.types';

export const setToken = (token) => ({
  type: UserActionTypes.SET_TOKEN,
  payload: token
})

export const setActiveUser = (user) => ({
  type: UserActionTypes.SET_ACTIVE_USER,
  payload: user
})

export const setActiveUserName = (name) => ({
  type: UserActionTypes.SET_ACTIVE_USER_NAME,
  payload: name
})

export const logout = () => ({
  type: UserActionTypes.LOGOUT
})