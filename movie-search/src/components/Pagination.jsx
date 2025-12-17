export default function Pagination({ currentPage, totalPages, previousPage, nextPage }) {
    return (
        <div className="flex flex-row space-x-4 justify-center items-center pt-2 pb-8">
            <button className="bg-[#141E2D] text-[#6C757D] text-lg py-2 px-4 rounded-lg" onClick={previousPage}>Previous</button>
            <p className="text-white text-lg">{currentPage} of {totalPages}</p>
            <button className="bg-[#141E2D] text-[#6C757D] text-lg py-2 px-4 rounded-lg" onClick={nextPage}>Next</button>
        </div>
    )
}