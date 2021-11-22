import { createApi } from 'unsplash-js';
import { accesskey } from '../src/config';
const unsplash = createApi({
    accessKey: accesskey,
});
export const searchImages = async (keyword, page = 1) =>
    await unsplash.search.getPhotos({
        query:keyword,
        page
    })