import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Guard against empty currency
    if (!currency) {
      setData({});
      return;
    }

    setLoading(true);
    setError(null);

    // ✅ CORRECT URL - Use NPM CDN instead of GitHub
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        setData(res[currency.toLowerCase()]);
        setError(null);
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setError(err.message);
        setData({});
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currency]);

  return { data, loading, error };
}

export default useCurrencyInfo;
