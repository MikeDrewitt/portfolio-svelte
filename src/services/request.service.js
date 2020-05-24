
import axios from "axios";

import config from "../config.js";

axios.defaults.baseURL = config.API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

function get(url) {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.error(err));
}

function post(url, body) {
  return axios.post(url, body)
    .catch(err => console.error(err));
}

export default {
  get,
  post,
}
