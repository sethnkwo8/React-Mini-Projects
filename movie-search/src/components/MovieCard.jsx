export default function MovieCard({ poster, name, release_date }) {
    return (
        <a className='movie-card' href="#">
            <div>
                <img src={poster} alt={name} />
            </div>
            <div>
                <p>
                    <span className='font-bold text-xl'>{name}</span>
                    . <span className='text-sm'>{release_date}</span>
                </p>
            </div>
        </a>
    );
}