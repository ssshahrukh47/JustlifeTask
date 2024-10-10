import { useState, useEffect } from 'react';
import axios from 'axios';

type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
};

// Custom hook for GET API calls
const useFetch = <T>(url: string, params?: object): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Define headers
  const headers = {
    'x-rapidapi-key': 'b323833297msh733edcf4fac1119p1c263cjsn92992d7cdbcd',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); 

      try {
        const response = await axios.get<T>(url, { headers, params });
        setData(response?.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
