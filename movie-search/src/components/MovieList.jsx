import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

export default function MovieList({ data, query, setQuery, onSubmit, searchTitle }) {
    const results = data.results;
    const searchResults = results.map(result => {
        const poster = result.poster_path || result.profile_path
            ? `https://image.tmdb.org/t/p/w500/${result.poster_path || result.profile_path}`
            : '';

        const name = result.title || result.name;
        const release_date = result.release_date ?? result.first_air_date ?? '';

        return <MovieCard key={result.id} poster={poster} name={name} release_date={release_date} />
    })

    return (
        <div className=" flex flex-col space-y-4">
            <div className="bg-[#0F1622] flex flex-row justify-center py-4">
                <SearchBar query={query} setQuery={setQuery} onSubmit={onSubmit} />
            </div>
            <div className="p-12">
                <div>
                    <h1 className="text-white text-2xl py-2">Search results for '{searchTitle}'</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 items-center">
                    {searchResults}
                </div>
            </div>
        </div>
    )
}