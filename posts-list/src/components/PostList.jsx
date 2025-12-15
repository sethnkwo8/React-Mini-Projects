import useFetchPosts from "../hooks/useFetchPosts";
import LoadingSpinner from "./LoadingSpinner";
import PostItem from "./PostItem";

export default function PostList() {
    const { data, loading, error } = useFetchPosts('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <LoadingSpinner />;
    if (error) return <h2>Something went wrong!</h2>;
    if (data) {
        const posts = data.map(item =>
            <PostItem key={item.id} title={item.title} body={item.body} />
        )
        return (
            <div>
                {posts}
            </div>
        );
    }
}