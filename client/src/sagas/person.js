import {
  takeEvery,
  takeLatest,
  takeLeading,
  call,
  put,
  all
} from "redux-saga/effects";
import {
  FIRE_PERSON_REQUESTED,
  FIRE_PERSON_FULFILLED,
  FIRE_PERSON_REJECTED,
  GET_PERSONS_REQUESTED,
  GET_PERSONS_FULFILLED,
  GET_PERSONS_REJECTED,
  HIRE_PERSON_REQUESTED,
  HIRE_PERSON_FULFILLED,
  HIRE_PERSON_REJECTED,
  GET_PERSONS_PENDING,
  FIRE_PERSON_PENDING,
  HIRE_PERSON_PENDING
} from "../ducks/person";
import personService from "../services/person";

function* getPersons() {
  try {
    yield put({ type: GET_PERSONS_PENDING });
    const persons = yield call(personService.getPersons);
    yield put({ type: GET_PERSONS_FULFILLED, payload: persons });
  } catch (err) {
    yield put({ type: GET_PERSONS_REJECTED, payload: err, error: true });
  }
}

function* firePerson(id) {
  try {
    yield put({ type: FIRE_PERSON_PENDING, payload: id });
    const firedPerson = yield call(personService.firePerson, id);
    yield put({ type: FIRE_PERSON_FULFILLED, payload: firedPerson.id });
  } catch (err) {
    yield put({ type: FIRE_PERSON_REJECTED, payload: err, error: true });
  }
}

function* hirePerson(person) {
  try {
    yield put({ type: HIRE_PERSON_PENDING, payload: person });
    const hiredPerson = yield call(personService.hirePerson, person);
    yield put({ type: HIRE_PERSON_FULFILLED, payload: hiredPerson });
  } catch (err) {
    yield put({ type: HIRE_PERSON_REJECTED, payload: err, error: true });
  }
}

export default function* personSagas() {
  yield all([
    yield takeLeading(GET_PERSONS_REQUESTED, function*() {
      yield call(getPersons);
    }),
    yield takeEvery(FIRE_PERSON_REQUESTED, function*(action) {
      yield call(firePerson, action.payload);
    }),
    yield takeEvery(HIRE_PERSON_REQUESTED, function*(action) {
      yield call(hirePerson, action.payload);
    })
  ]);
}
