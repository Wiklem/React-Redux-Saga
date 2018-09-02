import { fetchConstant } from "../constants/index";

const initialState = {
  loading: false,
  error: false
};

const fetchData = (state = initialState, action) => {
  switch (action.type) {
  case fetchConstant.REQUEST:
    return {
      ...state,
      loading: true
    };
  case fetchConstant.SUCCESS:
    return {
      [action.name]: action.payload,
      loading: false,
      error: false
    };
  case fetchConstant.ERROR:
    return { data: null, loading: false, error: action.error };
  default:
    return state;
  }
};

export default fetchData;
