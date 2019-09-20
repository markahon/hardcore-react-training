import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import favicon from "../assets/favicon.png";
import {
  FIRE_PERSON_REQUESTED,
  GET_PERSONS_REQUESTED,
  HIRE_PERSON_REQUESTED
} from "../ducks/person";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";
import Spinner from "./Spinner";
import styles from "./App.pcss";

console.debug("app styles map", styles);

const IndexPage = props => {
  const dispatch = useDispatch();
  const persons = useSelector(state => state.person.get("persons"));
  const isLoading = useSelector(state => state.ui.get("loading") > 0);

  useEffect(() => {
    // Intentional duplicate requests here
    dispatch({ type: GET_PERSONS_REQUESTED });
    dispatch({ type: GET_PERSONS_REQUESTED });
    dispatch({ type: GET_PERSONS_REQUESTED });
    dispatch({ type: GET_PERSONS_REQUESTED });
    dispatch({ type: GET_PERSONS_REQUESTED });
    dispatch({ type: GET_PERSONS_REQUESTED });
  }, [dispatch]);

  const firePerson = useCallback(
    id => {
      dispatch({ type: FIRE_PERSON_REQUESTED, payload: id });
    },
    [dispatch]
  );

  const hirePerson = useCallback(
    person => {
      dispatch({ type: HIRE_PERSON_REQUESTED, payload: person });
    },
    [dispatch]
  );

  const funcs = {
    firePerson
  };

  const isGood = p => p.age < 30 || p.relatedToCEO;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      {isLoading && <Spinner />}

      <h1 className={"centered"}>
        Rekry <img src={favicon} />
        inder
      </h1>

      <HirePersonForm hirePerson={hirePerson} />

      <h2>Ikävät ihmiset {badPersons.count()} kpl</h2>
      <PersonList persons={badPersons} showMetaData {...funcs} />

      <h2>Hyvät ihmiset {goodPersons.count()} kpl</h2>
      <PersonList persons={goodPersons} {...funcs} />
    </div>
  );
};

export default IndexPage;
