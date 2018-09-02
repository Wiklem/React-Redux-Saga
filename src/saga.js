import { call, put, takeLatest } from "redux-saga/effects";
import { fetchRequest, fetchSuccess, fetchError } from "./actions/fetchActions";
import { fetchConstant } from "./constants/";

const fetchURL = async url => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    return e;
  }
};

function* fetchSaga(action) {
  try {
    yield put(fetchRequest());
    const response = yield call(fetchURL, action.url);
    if (response) {
      yield put(fetchSuccess(response, action.name));
    }
  } catch (error) {
    yield put(fetchError);
  }
}

export function* rootSaga() {
  yield takeLatest(fetchConstant.FETCH_DATA, fetchSaga);
}
