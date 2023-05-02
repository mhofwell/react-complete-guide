import { useState, useCallback } from "react";

const useHTTP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // with resquestConfig and applyData here there are no external deps, so no deps in []
  const sendRequest = useCallback(async (requestConfig, transformTasks) => {
    setIsLoading(true);
    setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers: {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        transformTasks(data);

      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    }, []) 
    return {
      isLoading,
      error,
      sendRequest,
  };
};
export default useHTTP;
