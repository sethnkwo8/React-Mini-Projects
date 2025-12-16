import MovieCard from "./MovieCard";

export default function MovieList({ data }) {
    const results = data.results;
    const searchResults = results.map(result => {
        const poster = result.poster_path || result.profile_path
            ? `https://image.tmdb.org/t/p/w500/${result.poster_path || result.profile_path}`
            : '';

        const name = result.title || result.name;
        const release_date = result.release_date ?? result.first_air_date ?? '';

        return <MovieCard poster={poster} name={name} release_date={release_date} />
    })

    return (
        <div className="bg-[#020916] grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 items-center">
            {searchResults}
        </div>
    )
}