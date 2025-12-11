import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FetchButton from "./components/FetchButton";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const { data, loading, error, refetch } = useFetch('https://randomuser.me/api/');

  if (loading) return <LoadingSpinner />;
  if (error) return <h2>Something went wrong</h2>;
  if (!data) return null;

  const user = data.results[0];
  const profilePicture = user.picture.large;
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const email = user.email;

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <UserCard profilePicture={profilePicture} fullName={fullName} email={email} />
        <FetchButton onClick={refetch} />
      </div>
    </>
  );
}