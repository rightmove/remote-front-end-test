import axios from 'axios';

export const rightmoveApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});
