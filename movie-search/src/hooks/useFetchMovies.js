import { useEffect, useState } from "react";

export default function useFetchMovies(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchMovies() {
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

    return { data, loading, error, searchMovies: fetchMovies };
}