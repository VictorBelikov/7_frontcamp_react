import axios from 'axios';

const axios_instance = axios.create({
  baseURL: 'https://reactjs-cdp.herokuapp.com/'
});

export default axios_instance;
