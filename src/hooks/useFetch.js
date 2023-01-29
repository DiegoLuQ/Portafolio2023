import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, headers = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/${endpoint}`, headers)
    .then((resp) => {
      setData(resp.data);
    })
    .catch(err => {
        setError(err)
    })
    .finally(() => {
        setLoading(false)
    })
  }, []);

  return { data, error, loading };
};

export default useFetch