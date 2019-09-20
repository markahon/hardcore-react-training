import React from "react";
import Person from "./Person";

// Jos ei ole TypeScriptiä
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

import styles from "./PersonList.pcss";

const PersonList = props => {
  const { persons, showMetaData, ...rest } = props;

  let avgAge = persons.reduce((a, p) => a + p.age, 0) / persons.count();
  avgAge = avgAge.toFixed(1);

  return (
    // React.Fragment --> tyhjä elementti, esim. kasa td-elementtejä --> babelilla return (<>  ... </>);
    <div className="persons">
      {showMetaData && <p>Keski-ikä: {avgAge} vuotta</p>}
      {showMetaData && (
        <p className={"centered"}>
          {"<--"} Vapauta vasemmalle - Omista oikealle {"-->"}
        </p>
      )}
      {persons
        .sortBy(p => p.firstName)
        .sortBy(p => p.lastName)
        .map(p => (
          <Person key={p.id} {...rest} person={p} />
        ))}
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  showMetaData: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetaData: false
};

export default PersonList;
