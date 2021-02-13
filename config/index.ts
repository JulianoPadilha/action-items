const { NODE_ENV } = process.env;

const baseURL = NODE_ENV === 'development'
  ? 'http://localhost:8000/api' 
  : 'https://siaccounts-actionitems.herokuapp.com/api';

export default baseURL;
