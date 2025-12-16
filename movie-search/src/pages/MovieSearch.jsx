import { useState } from "react";
import SearchBar from "../components/SearchBar";
import useFetchMovies from "../hooks/useFetchMovies";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieList from "../components/MovieList";

export default function MovieSearch() {
    const APIKey = '92cb96b17b6ea594ade0b3fe45b93e78';
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const { data, loading, error, searchMovies } = useFetchMovies(`https://api.themoviedb.org/3/search/multi?api_key=${APIKey}&query=${query}&page=${page}`);

    function onSubmit(e) {
        e.preventDefault();
        if (query !== '') {
            searchMovies();
        }

        console.log(data)
    }

    if (loading) return <LoadingSpinner />;
    if (error) return <h2>Something went wrong</h2>;
    if (data) return (
        <MovieList data={data} />
    )
    return (
        <div className="min-h-screen bg-[#020916] flex flex-col items-center space-y-4 bg">
            <SearchBar query={query} setQuery={setQuery} onSubmit={(e) => onSubmit(e)} />
        </div>
    );
}