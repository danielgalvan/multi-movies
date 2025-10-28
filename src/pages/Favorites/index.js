import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import './favorites.css';

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem("@myMovies");
        setMovies(JSON.parse(myList) || []);
    }, []);

    function deleteMovie(id) {
        const filteredMovies = movies.filter((movie) => {
            return movie.id !== id;
        });

        setMovies(filteredMovies);
        localStorage.setItem("@myMovies", JSON.stringify(filteredMovies));
        toast.success('Filme Excluido com sucesso!');
    }

    return(
        <div className="favorites">
            <h1>Meus Filmes Salvos</h1>

            {movies.length === 0 && <span>Não há filmes salvos!</span>}

            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>Ver detalhe</Link>
                                <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Favorites;