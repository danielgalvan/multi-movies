import axios from 'axios';

/*
    Base da URL: https://api.themoviedb.org/3/
    URL da API GET ALL: movie/now_playing
    URL da API GET Detail: movie/id
    KEY: b3c2a8f74a0e861f1d0342cd52ca657e
    language: pt-BR
*/
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;