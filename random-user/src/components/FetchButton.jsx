export default function FetchButton({ onClick }) {
    return (
        <button className="py-4 px-8 rounded-lg text-white bg-gray-500 hover:bg-gray-700" onClick={onClick}>Get New User</button>
    );
}