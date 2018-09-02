import { fetchConstant } from "../constants/index";

export const fetchData = (url, name) => ({
  type: fetchConstant.FETCH_DATA,
  url: url,
  name: name
});

export const fetchRequest = () => ({ type: fetchConstant.REQUEST });
export const fetchSuccess = (payload, name) => ({
  type: fetchConstant.SUCCESS,
  payload,
  name
});
export const fetchError = () => ({ type: fetchConstant.FAILURE });
