import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://woocommerce.local/wp-json/wc/v3/'
});
export default instance;