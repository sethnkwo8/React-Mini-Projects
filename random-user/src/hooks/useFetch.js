import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, loading, error, refetch: fetchData };

}