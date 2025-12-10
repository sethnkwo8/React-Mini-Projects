import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();
                const result = data.results[0].gender;
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [url])

    return { data, loading, error };

}