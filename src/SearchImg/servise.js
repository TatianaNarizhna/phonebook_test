import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";

const fetchImage = (search) => {
  return axios
    .get(
      `${BASE_URL}?q=${search}&page=1&key=21902781-05f70a6abac1a4120ac7c9ed1&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

const api = {
  fetchImage,
};

export default api;
