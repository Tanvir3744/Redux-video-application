import axios from '../../utils/axios.js';

const getTags = async () => {
    const response = await axios.get('http://localhost:9000/tags')
    return response.data;
}
export default getTags;