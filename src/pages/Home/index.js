import { useEffect, useState } from "react";
import api from "../../services/api";

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

        console.log(response.data.results);
        }

        loadMovies();

    }, []);
    return (
        <div>
            <h1>Página Home</h1>;
        </div>
    )
}

export default Home;