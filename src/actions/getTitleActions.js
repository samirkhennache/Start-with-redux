import { GET_TITLE } from "./types";
export const getTitle = data => {
  return {
    type: GET_TITLE,
    payload: data.map(e => e.title)
  };
};
