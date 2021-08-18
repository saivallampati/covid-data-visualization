import { useState, useEffect } from "react";

const useFetch = (reload, setReload) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (reload) {
      setIsLoading(true);
      fetch("https://api.covid19api.com/summary")
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setIsLoading(false);
          setReload(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setReload(false);
        });
    }
  }, [reload]);
  return { data, isLoading };
};

export default useFetch;
