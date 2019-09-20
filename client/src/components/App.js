import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import favicon from "../assets/favicon.png";
import {
  FIRE_PERSON_REQUESTED,
  GET_PERSONS_REQUESTED,
  HIRE_PERSON_REQUESTED
} from "../ducks/person";
import styles from "./App.pcss";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import Spinner from "./Spinner";
import { Switch, Route } from "react-router";

import NotFound from "./NotFound";

console.debug("app styles map", styles);

const App = props => {
  const dispatch = useDispatch();
  const persons = useSelector(state => state.person.get("persons"));
  const isLoading = useSelector(state => state.ui.get("loading") > 0);

  useEffect(() => {
    // Intentional duplicate requests here, we stop duplicates in sagas handling.
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
    firePerson,
    hirePerson
  };

  return (
    <>
      {isLoading && <Spinner />}

      <h1 className={"centered"}>
        Rekry <img src={favicon} />
        inder
      </h1>

      <Switch>
        <Route
          path="/"
          exact
          // render function sisältö saa komponentin
          render={props => {
            return <IndexPage persons={persons} {...funcs} />;
          }}
        />
        <Route
          path="/person/:id"
          exact
          // render function sisältö saa komponentin
          render={props => {
            console.log("personroute props", props);
            const person = persons.get(props.match.params.id);
            return <PersonPage persons={persons} person={person} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
