import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import './movies.css';

function Movies(){
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadMovieDetail() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "b3c2a8f74a0e861f1d0342cd52ca657e",
                    language: "pt-BR"
                }
            })
            .then((response) => {
                if (response.data) {
                setMovieDetail(response.data);
                console.log(response.data);
                } else {
                    console.log('erro inesperado');
                }
                setLoading(false);
            })
            .catch(() => {
                console.log('filme não encontrado');
                setLoading(false);
            });
        }

        loadMovieDetail();

        return () => {
            console.log('componente desmontado');
        }
    }, []);

    if (loading) {
        return (
            <div className="movie-detail">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className="movie-detail">
            <h1>{movieDetail.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`} alt={movieDetail.title}></img>

            <h3>Sinopse</h3>
            <span>{movieDetail.overview}</span>
            <strong> Avaliação: {movieDetail.vote_average} / 10</strong>

            <div className="buttons">
                <button>Salvar</button>
                <button>
                    <a href="a">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Movies;