import axios from "axios";

const { REACT_APP_API } = process.env;

const getPersons = async () => {
  try {
    const ret = await axios.get(`${REACT_APP_API}/person`);
    return ret.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const hirePerson = async person => {
  try {
    const ret = await axios.post(`${REACT_APP_API}/person`, person);
    return ret.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const firePerson = async id => {
  try {
    console.log("fireperson", id);
    const ret = await axios.delete(`${REACT_APP_API}/person/${id}`);
    console.log("fired", ret.data.firstName, ret.data.lastName);
    return ret.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default {
  getPersons,
  firePerson,
  hirePerson
};
