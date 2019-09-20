import React, { Component } from "react";
import Person from "./Person";

const needsPerson = Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  return <Component {...rest} person={person} />;
};

const PersonPage = props => {
  const { person } = props;

  return (
    <div>
      <h2>
        {person.lastName}, {person.firstName}
      </h2>

      <p>Yhyy byhyy</p>
    </div>
  );
};

export default needsPerson(PersonPage);
