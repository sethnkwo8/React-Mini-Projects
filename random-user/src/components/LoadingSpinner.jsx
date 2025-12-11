export default function LoadingSpinner() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div class="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            <p class="text-xl">Fetching data...</p>
        </div>
    )
}