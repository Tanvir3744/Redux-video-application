import axios from '../../utils/axios.js';

const getTags = async () => {
    const response = await axios.get('/taga')
    return response.data;
}
export default getTags;