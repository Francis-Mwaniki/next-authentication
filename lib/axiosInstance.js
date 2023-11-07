import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://authy-fy2e.onrender.com', // Replace this with your API base URL
});

export default instance;
