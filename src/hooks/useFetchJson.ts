import { useEffect, useState } from 'react';

const useFetchJson = (url: string): [never[], boolean] => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const resData = await res.json();
      if (res.ok) {
        setItems(resData);
        setLoading(false);
      } else alert(JSON.stringify(resData));
    })();
  }, [url]);

  return [items, isLoading];
};

export default useFetchJson;
