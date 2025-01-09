import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotosByQuery = (searchedQuery, page) => {
    const requestParams = {
        q: searchedQuery,
        page: page,
        key: "47600623-616adcc60326fea30dcc03763",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
    };

    return axios.get('/api', { params: requestParams });
}