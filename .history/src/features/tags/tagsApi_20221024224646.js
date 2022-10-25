import axios from '../../utils/axios.js';

const getTags = async () => {
    const response = axios.get('/tags')
}
export default getTags;