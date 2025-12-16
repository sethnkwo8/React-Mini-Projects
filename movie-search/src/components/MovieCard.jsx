export default function MovieCard({ poster, name, release_date }) {
    return (
        <a class='movie-card' href="#">
            <div>
                <img src={poster} alt={name} />
            </div>
            <div>
                <p>
                    <span class='font-bold text-xl'>{name}</span>
                    . <span class='text-sm'>{release_date}</span>
                </p>
            </div>
        </a>
    );
}