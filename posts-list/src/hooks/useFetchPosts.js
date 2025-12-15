import { useState, useEffect } from "react";

export default function useFetchPosts(url, page) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    async function fetchPosts() {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(url);
            const data = await response.json()
            setData(data);
        }
        catch (error) {
            setError(error)
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchPosts();
    }, [url]);

    return { data, loading, error }
}