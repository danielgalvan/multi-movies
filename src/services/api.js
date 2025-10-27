import axios from 'axios';

/*
    Base da URL: https://api.themoviedb.org/3/
    URL da API: movie/now_playing?api_key=b3c2a8f74a0e861f1d0342cd52ca657e&language=pt-BR
    KEY: b3c2a8f74a0e861f1d0342cd52ca657e
    language: pt-BR
*/
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;