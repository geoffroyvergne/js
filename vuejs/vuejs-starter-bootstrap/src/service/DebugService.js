import axios from 'axios';
const API_URL = 'json';
export class DebugService {

    constructor(){}

    getIndex() {
        const url = `${API_URL}/index.json`;
        return axios.get(url).then(response => response.data);
    }
}