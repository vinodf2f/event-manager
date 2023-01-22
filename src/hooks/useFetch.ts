import { useState, useEffect } from "react";

interface UseFetchProps {
  url: string;
  defaultResponse: any;
}

interface UseFetchResponse {
  isLoading: boolean;
  response: any;
  error: any;
  resetResponse: () => void;
}

const useFetch = ({
  url,
  defaultResponse,
}: UseFetchProps): UseFetchResponse => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(defaultResponse);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const responseJson = await response.json();
      setResponse(responseJson);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const resetResponse = () => {
    setResponse(null);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { isLoading, response, error, resetResponse };
};

export default useFetch;
