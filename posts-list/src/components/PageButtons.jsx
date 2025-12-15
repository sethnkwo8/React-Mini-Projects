export default function PageButtons({ page, onPrevious, onNext }) {

    return (
        <div className="flex flex-row space-x-4 items-center py-4">
            <button disabled={page === 1} className="disabled:bg-gray-700 px-6 py-3 rounded-lg bg-gray-400 enabled:hover:bg-gray-600 enabled:hover:scale-105" onClick={onPrevious}>Previous</button>
            <p>Page {page}</p>
            <button disabled={page === 10} className="disabled:bg-gray-700 px-6 py-3 rounded-lg bg-gray-400 enabled:hover:bg-gray-600 enabled:hover:scale-105" onClick={onNext}>Next</button>
        </div >
    );
}