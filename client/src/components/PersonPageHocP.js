import React, { Component } from "react";

const needsPerson = params => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  if (params.minAge > person.age) {
    return 'ei saa';
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

// Monen HOCin compose, sen sijaan että tehtäisiin joulukuusi
// export default compose(
//   jk1(params),
//   jk2,
//   jk3(params3)
// )(PersonPage);

export default needsPerson({
  minAge: 60
})(PersonPage);

// React router ja Formik tyyli
const NeedsPerson = props => {
  const {minAge, person, children , ...rest} = props;

  if (!person) {
    return null;
  }

  if (params.minAge > person.age) {
    return 'ei saa';
  }

  return children({
    ...rest,
    person
  });
};

const PersonPage = props => {
  const { person } = props;

  return (
    <NeedsPerson minAge={60} person={props.person}>
      {({person}) => (
        <div>
          <h2>
            {person.lastName}, {person.firstName}
          </h2>

          <p>Yhyy byhyy</p>
        </div>
      )}

    </NeedsPerson>
  );
};

export default PersonPage;
