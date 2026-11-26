
import axios from 'axios';

export const apiDummy = axios.create({
  baseURL: 'https://dummyjson.com/products?limite=24',
  timeout: 10000, 
});
