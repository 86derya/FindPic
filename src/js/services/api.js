import axios from "axios";
const API_KEY = "10456559-ece128cde22be6e54d79b9b25";

export const getImages = ({ query, page }) => {
  const url = `https://findpicserver.herokuapp.com/`;
  // const url = `http://localhost:8080/`;
  return axios({
    method: "get",
    url: url,
    data: {
      query: query,
      page: page
    },
    headers: { Xquery: query, Xpage: page }
  })
    .then(res => res.data.data.hits)
    .catch(err => console.log("axios err : ", err));
};
