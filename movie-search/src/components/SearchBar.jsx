export default function SearchBar({ query, setQuery, onSubmit }) {

    return (
        <div className="p-4 w-full min-h-screen flex flex-col items-center justify-center gap-12">
            <h1 className="text-white text-4xl md:text-6xl font-bold">Movie Search</h1>
            <form className="w-full md:w-1/3 rounded-full bg-white  flex flex-row items-center" onSubmit={(e) => onSubmit(e)}>
                <input className="text-black text-lg outline-0 flex-3/4 p-5" onChange={(e) => setQuery(e.target.value)} type="search" value={query} />
                <button className="text-black text-2xl disabled:bg-gray-900 hover:bg-gray-700 bg-gray-500 rounded-full p-5" disabled={query === '' ? true : false} type="submit"><ion-icon name="search-outline"></ion-icon></button>
            </form>
        </div>
    )
}