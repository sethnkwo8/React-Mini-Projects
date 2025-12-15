import { useState } from "react";
import useFetchPosts from "../hooks/useFetchPosts";
import LoadingSpinner from "./LoadingSpinner";
import PostItem from "./PostItem";
import PageButtons from "./PageButtons";

export default function PostList() {
    const [page, setPage] = useState(1);

    const { data, loading, error } = useFetchPosts(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);

    function nextPage() {
        setPage(p => p + 1);
    }

    function previousPage() {
        setPage(p => p - 1);
    }

    if (loading) return <LoadingSpinner />;
    if (error) return <h2>Something went wrong!</h2>;
    if (!data) return null;
    if (data) {
        const posts = data.map(item =>
            <PostItem key={item.id} title={item.title} body={item.body} />
        )
        return (
            <div className="min-h-screen flex flex-col items-center mt-12 space-y-4">
                <h1 className="font-bold text-3xl">POSTS</h1>
                {posts}
                <div>
                    <PageButtons page={page} onPrevious={() => previousPage()} onNext={() => nextPage()} />
                </div>
            </div>
        );
    }
}