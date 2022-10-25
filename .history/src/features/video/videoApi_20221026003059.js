import axios from '../../utils/axios'

export const getVidoe = (id) => {
    const response = axios.get(`/videos/${ id }`)
    return response;
}