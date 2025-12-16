export default function LoadingSpinner() {
    return (
        <div className="min-h-screen bg-[#020916] flex flex-col justify-center items-center">
            <div className="w-24 h-24 border-4 border-[#79C142] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-2xl text-[#79C142]">Fetching data...</p>
        </div>
    )
}