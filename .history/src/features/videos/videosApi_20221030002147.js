import axios from '../../utils/axios';
//sample url filtering 
//http://localhost:9000/videos?tags_like=javascript&q=react
export const getVideos = async (tags, search) => {
    const queryString = '';
    if (tags.length > 0) {
        queryString += tags.map(tag => `tags_like${tag}`).join('&')
    }

    if (search !== '') {
        queryString += `&q=${search}`
    }
    const response = await axios.get(`/videos?${queryString}`)
    return response.data;
}