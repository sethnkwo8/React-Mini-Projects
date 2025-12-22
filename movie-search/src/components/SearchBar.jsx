export default function SearchBar({ query, setQuery, onSubmit }) {

    return (
        <>
            <form className="w-full md:w-1/3 rounded-full bg-white flex flex-row items-center" onSubmit={(e) => onSubmit(e)}>
                <input autoFocus={true} className="text-black text-lg outline-0 flex-3/4 p-5" onChange={(e) => setQuery(e.target.value)} type="search" value={query} />
                <button className="disabled:text-[#6C757D] text-2xl disabled:bg-gray-900 hover:bg-gray-700 bg-gray-500 rounded-full p-5" disabled={query === '' ? true : false} type="submit"><ion-icon name="search-outline"></ion-icon></button>
            </form>
        </>
    )
}