import axios from 'axios';
const API_URL = '/json';

class DebugService {

    //constructor(){}

    async getIndex() {
        const url = `${API_URL}/index.json`;
        const response = await axios.get(url);
        return response.data;
    }
}

export default DebugService; 