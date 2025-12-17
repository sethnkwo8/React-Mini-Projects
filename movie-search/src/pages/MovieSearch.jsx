import { useState } from "react";
import SearchBar from "../components/SearchBar";
import useFetchMovies from "../hooks/useFetchMovies";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

export default function MovieSearch() {
    const APIKey = '92cb96b17b6ea594ade0b3fe45b93e78';
    const [query, setQuery] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [page, setPage] = useState(1);
    const { data, loading, error, searchMovies } = useFetchMovies(`https://api.themoviedb.org/3/search/multi?api_key=${APIKey}&query=${query}&page=${page}`);

    function onSubmit(e) {
        e.preventDefault();
        if (query !== '') {
            searchMovies();
        }

        setSearchTitle(query);

        setQuery('');
    }

    function previousPage() {
        setPage(p => p - 1)
    }

    function nextPage() {
        setPage(p => p + 1)
    }

    if (loading) return <LoadingSpinner />;
    if (error) return <h2>Something went wrong</h2>;
    if (data) {
        const totalPages = data.total_pages;

        return (
            <div className="min-h-screen bg-[#020916] flex flex-col">
                <MovieList data={data} query={query} setQuery={setQuery} onSubmit={(e) => onSubmit(e)} searchTitle={searchTitle} />
                <Pagination currentPage={page} totalPages={totalPages} previousPage={() => previousPage()} nextPage={() => nextPage()} />
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-[#020916] flex flex-col items-center space-y-4 bg">
            <div className="p-4 w-full min-h-screen flex flex-col items-center justify-center gap-12">
                <h1 className="text-white text-4xl md:text-6xl font-bold">Movie Search</h1>
                <SearchBar query={query} setQuery={setQuery} onSubmit={(e) => onSubmit(e)} />
            </div>
        </div>
    );
}