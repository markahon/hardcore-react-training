import { List, Map } from "immutable";

export const FIRE_PERSON_REQUESTED = "FIRE_PERSON_REQUESTED";
export const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";
export const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";
export const FIRE_PERSON_REJECTED = "FIRE_PERSON_REJECTED";

export const HIRE_PERSON_REQUESTED = "HIRE_PERSON_REQUESTED";
export const HIRE_PERSON_PENDING = "HIRE_PERSON_PENDING";
export const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";
export const HIRE_PERSON_REJECTED = "HIRE_PERSON_REJECTED";

export const GET_PERSONS_REQUESTED = "GET_PERSONS_REQUESTED";
export const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
export const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";
export const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

const defaultState = Map({
  persons: Map()
});

// Action creators, can be just not necessarily needed boilerplate, if they are simple.

// export const getPersons = () => {
//   return {
//     type: GET_PERSONS_REQUESTED
//   };
// };
//
// export const firePerson = id => {
//   return {
//     type: FIRE_PERSON_REQUESTED,
//     payload: id
//   };
// };
//
// export const hirePerson = person => {
//   return {
//     type: HIRE_PERSON_REQUESTED,
//     payload: person
//   };
// };

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case FIRE_PERSON_PENDING:
      return state.updateIn(["persons", payload], person => {
        console.log("person being fired", person);
        return {
          // Palautetaan uusi instanssi, jotta muutos voidaan nähdä === vertailulla.
          // Vaihtoehto mennä esim. immutable-js:n tyypityksiin Record tmv.
          ...person,
          isBeingFired: true
        };
      });
    case GET_PERSONS_FULFILLED:
      return state.set("persons", Map(payload.map(p => [p.id, p])));
    case FIRE_PERSON_FULFILLED:
      return state.removeIn(["persons", payload]);
    case HIRE_PERSON_FULFILLED:
      return state.setIn(["persons", payload.id], payload);
    default:
      return state;
  }
}
