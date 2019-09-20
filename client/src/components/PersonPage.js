import React from "react";
import Person from "./Person";

const PersonPage = props => {
  const { person, persons } = props;

  const loaded = persons.count() > 0;

  if (!person) {
    return null;
  }

  return (
    <div>
      <h2>
        {person.lastName}, {person.firstName}
      </h2>

      <p>Yhyy byhyy</p>
    </div>
  );
};

export default PersonPage;
