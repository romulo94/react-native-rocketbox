import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-romulo.herokuapp.com'
})

export default api