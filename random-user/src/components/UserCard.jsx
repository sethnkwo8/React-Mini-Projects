
export default function UserCard({ profilePicture, fullName, email }) {
    return (
        <div className="rounded-lg shadow-lg p-8 flex flex-col">
            <img className="py-4" src={profilePicture} alt={fullName} />
            <p className="text-xl"><span className="font-bold">Full Name</span>: {fullName}</p>
            <p className="text-xl"><span className="font-bold">Email</span>: {email}</p>
        </div>
    )
}