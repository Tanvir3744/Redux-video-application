import axios from '../../utils/axios';
//sample url filtering 
//http://localhost:9000/videos?tags_like=javascript&q=react
export const getVideos = async (tags, search) => {
    let queryString = '';
    if (tags?.length > 0) {
        queryString += tags?.map(tag => `tags_like=${tag}`).join('&')
    }

    if (search !== '') {
        queryString = `&q=${ search }`;
    }
    console.log(queryString)
    const response = await axios.get(`/videos?${queryString}`)
    console.log(response)
    return response.data;
}