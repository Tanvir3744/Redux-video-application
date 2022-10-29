import axios from '../../utils/axios'
//?tags_like=javascript&id_ne=1&_limit=4 --- query sting sample
export const getRelatedVideo = async ({ tags, id }) => {
    const limit = 5;
    /* let queryString = tags?.length > 0 ? tags.map(tag => `tags_like=${ tag }`).join('&') + `$id_ne=${ id }&_limit=${ limit }` :
        `$id_ne=${ id }&_limit=${ limit }`; */
       let queryString = tags?.length > 0
        ? tags.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${id}&_limit=${limit}`
        : `id_ne=${id}&_limit=${limit}`;

    console.log(queryString)
    const response = await axios.get(`/video?${ queryString }`)
    return response.data;
}