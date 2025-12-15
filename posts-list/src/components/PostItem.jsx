export default function PostItem({ title, body }) {
    return (
        <div className="bg-gray-400 rounded-lg p-3 my-2 text-center w-3/4 hover:scale-110 transition-all duration-300 ease-in-out">
            <p className="font-bold">{title}</p>
            <p className="text-sm">{body}</p>
        </div>
    );
}