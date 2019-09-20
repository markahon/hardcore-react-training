import axios from 'axios';

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

export default {
  getPersons
};
