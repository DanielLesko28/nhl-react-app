import { useEffect, useState } from "react";

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonResponse) => setResult(jsonResponse));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("What is here?", result);
  return result;
};
