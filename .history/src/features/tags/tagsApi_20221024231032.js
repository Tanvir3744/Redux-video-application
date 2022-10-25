import axios from '../../utils/axios.js';

const getTags = async () => {
    const response = await axios.get('/tags')
    // return response.data;
    console.log(response)
}
export default getTags;