import React from "react";
import styles from "./App.pcss";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

console.debug("app styles map", styles);

const IndexPage = props => {
  const { persons, firePerson, hirePerson } = props;

  const funcs = {
    firePerson
  };

  const isGood = p => p.age < 30 || p.relatedToCEO;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <>
      <HirePersonForm hirePerson={hirePerson} />

      <h2>Ikävät ihmiset {badPersons.count()} kpl</h2>
      <PersonList persons={badPersons} showMetaData {...funcs} />

      <h2>Hyvät ihmiset {goodPersons.count()} kpl</h2>
      <PersonList persons={goodPersons} {...funcs} />
    </>
  );
};

export default IndexPage;
