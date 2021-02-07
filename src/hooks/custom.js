import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch({
  api,
  method,
  url,
  data = null,
  config = null,
}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios(url, JSON.parse(config), JSON.parse(data))
          .then((res) => {
            setResponse(res.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [api, method, url, data, config]);

  return { response, error, isLoading };
}
