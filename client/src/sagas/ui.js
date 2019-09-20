import { all, put, takeEvery } from "redux-saga/effects";
import { DECREMENT_LOADING, INCREMENT_LOADING } from "../ducks/ui";

export default function* uiSagas() {
  yield all([
    yield takeEvery(action => /_PENDING$/.test(action.type), function*() {
      yield put({ type: INCREMENT_LOADING });
    }),
    yield takeEvery(
      action => /(_FULFILLED|_REJECTED)$/.test(action.type),
      function*() {
        yield put({ type: DECREMENT_LOADING });
      }
    )
  ]);
}
