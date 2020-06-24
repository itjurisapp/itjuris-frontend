import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/itjurisapi/process/v1/basic-datas',
})

export default api;