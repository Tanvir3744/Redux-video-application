import axios from '../../utils/axios'

export const getVideo = (id) => {
    const response = axios.get(`/videos/${ id }`)
    return response;
}