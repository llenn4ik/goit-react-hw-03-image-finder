import axios from "axios";

// axios.defaults.baseURL = "https://pixabay.com";
 
const API_KEY = "18747667-73f1ac82bfe1238b7580f61a7";
// API_key: '18747667-73f1ac82bfe1238b7580f61a7',
const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
  .get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
  .then((response) => response.data.hits)
};

export default {
  fetchImagesWithQuery,
};