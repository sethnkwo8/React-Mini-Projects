import { useEffect, useState } from "react";

export default function useFetchMovies(url, query) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchMovies() {
        if (!query) return;

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(url);
            const data = await response.json();

            setData(data);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [url])

    return { data, loading, error, searchMovies: fetchMovies };
}