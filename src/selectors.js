import { createSelector } from "reselect";

const fetchDataState = state => state.fetchData;

export const getUsers = createSelector(fetchDataState, data => {
  if (data && data.users) {
    return {
      ...data,
      total: data.users.length
    };
  }
  return null;
});
