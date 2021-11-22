import { createApi } from 'unsplash-js';
import { accesskey } from '../src/config';
const unsplash = createApi({
    accessKey: accesskey,
});


// export const getImages = (page = 1) =>
//     axios.get(`${APIURL}/?page=${page}&key=${process.env.REACT_APP_APIKEY}`);
export const searchImages = async (keyword, page = 1) =>
    await unsplash.search.getPhotos({
        query:keyword,
        page
    })