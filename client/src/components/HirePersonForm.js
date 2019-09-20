import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import uuid from 'uuid';

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Puuttuu'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Puuttuu')
});

const HirePersonForm = props => {
  const { hirePerson } = props;
  return (
    <div>
      <Formik
        initialValues={{
          firstName: 'Adam',
          lastName: ''
        }}
        onSubmit={values => {
          const newPerson = {
            ...values,
            id: uuid(),
            age: 28,
            gender: 'm'
          };
          hirePerson(newPerson);
        }}
        validationSchema={schema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValid
          }) => (
            <form onSubmit={handleSubmit}>
              {/* Raw way */}
              {/*<div>*/}
              {/*  <label>Etunimi</label>*/}
              {/*  <input*/}
              {/*    name="firstName"*/}
              {/*    value={values.firstName}*/}
              {/*    onChange={handleChange}*/}
              {/*    />*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*  <label>Etunidmi</label>*/}
              {/*  <input*/}
              {/*    name="lastName"*/}
              {/*    value={values.lastName}*/}
              {/*    onChange={handleChange}*/}
              {/*  />*/}
              {/*</div>*/}

              <Field name="firstName" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <Field name="lastName" label={"Etunimi"}/>
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <button type="submit" disabled={!isValid}>Palkkaa</button>
            </form>
        )}
      </Formik>
    </div>
  );
};

export default HirePersonForm;
