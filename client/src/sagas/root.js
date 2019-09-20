import { all, fork } from "redux-saga/effects";
import personSagas from "./person";
import uiSagas from "./ui";

export default function* rootSaga() {
  console.log("heippa rootsaga alku");
  yield all([fork(personSagas), fork(uiSagas)]);
  console.log("en tule?");
}
