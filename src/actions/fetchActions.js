import * as types from "./types";
import axios from "axios";

const fetchStarted = () => {
  return {
    type: types.FETCH_STARTED,
    payload: true
  };
};
const fetchSucced = data => {
  return {
    type: types.FETCH_SUCCED,
    payload: data
  };
};

const fetchFailed = error => {
  return {
    type: types.FETCH_FAILED,
    payload: error
  };
};

export const getData = () => disptach => {
  disptach(fetchStarted());
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(data => disptach(fetchSucced(data.data)))
    .catch(err => disptach(fetchFailed(err)));
};


