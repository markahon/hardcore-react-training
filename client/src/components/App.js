import React, { useEffect, useState } from "react";
import personService from "../services/person";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

import { List } from "immutable";

import styles from "./App.pcss";
import favicon from "../assets/favicon.png";

const App = props => {
  const [persons, setPersons] = useState(List());

  useEffect(
    () => {
      (async () => {
        const pz = await personService.getPersons();
        setPersons(List(pz));
      })();
      // useEffect should return a cleanup function if cleanup is required,
      // e.g. with some external libraries that don't know about React
    },
    // deps contains variables that might change, changes trigger useEffect
    [setPersons]
  );

  const firePerson = id => {
    console.log("Fire person", id);
    setPersons(persons.filter(p => p.id !== id));
  };

  const hirePerson = person => {
    setPersons(persons.push(person));
  };

  const funcs = {
    firePerson
  };

  console.log("persons", persons);

  const isGood = p => p.age < 30 || p.relatedToCEO;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
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

export default App;
