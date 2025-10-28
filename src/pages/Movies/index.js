import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import api from '../../services/api';
import './movies.css';

function Movies(){
    const { id } = useParams();
    const navigation = useNavigate();

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
                } else {
                    navigation("/", {replace : true});
                    setLoading(false);
                    return;
                }
                setLoading(false);
            })
            .catch(() => {
                navigation("/", {replace : true});
                setLoading(false);
                return;
            });
        }

        loadMovieDetail();

        return () => {
            console.log('componente desmontado');
        }
    }, [navigation, id]);

    function saveMovie() {
        const myMovies = localStorage.getItem("@myMovies");

        let savedMovies = JSON.parse(myMovies) || [];
        
        const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movieDetail.id);

        if (hasMovie) {
            alert('Esse filme ja foi adicionado');
            return;
        }

        savedMovies.push(movieDetail);
        localStorage.setItem("@myMovies", JSON.stringify(savedMovies));
        alert('Filme Salvo com sucesso!');
    }

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
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movieDetail.title} trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Movies;