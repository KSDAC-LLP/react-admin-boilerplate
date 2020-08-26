import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectToken = createSelector(
  [selectUser],
  user => user.token
);

export const selectActiveUser = createSelector(
  [selectUser],
  user => user.activeUser
);

export const selectActiveUserName = createSelector(
  [selectActiveUser],
  activeUser => activeUser.name
);