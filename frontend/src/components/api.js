import _axios from "axios";

const instance = _axios.create({
  baseURL: `http://localhost:5000/api`,
});

export default instance;
