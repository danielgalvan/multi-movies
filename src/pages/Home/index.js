import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css';

function Home(){
    const [movies, setMovies] = useState([]);

    useEffect (() => {

        async function loadMovies() {
        const response = await api.get("movie/now_playing", {
            params: {
                api_key: "b3c2a8f74a0e861f1d0342cd52ca657e",
                language: "pt-BR",
                page: 1
            }
        });

            if (response?.data?.results) {
                setMovies(response.data.results);
            }
        }

        loadMovies();

    }, []);
    return (
        <div className="container">
            <div className="list-movies">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}></img>
                            <Link to={`/movie/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;