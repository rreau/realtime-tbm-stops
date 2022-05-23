import { useEffect, useState } from 'react';

const useAutoFetchJson = (url: string, timerSeconds: number): [never[], boolean] => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fethJson = async (url: string) => {
    const res = await fetch(url);
    const resData = await res.json();
    if (res.ok) {
      setItems(resData);
      setLoading(false);
    } else alert(JSON.stringify(resData));
  };

  useEffect(() => {
    fethJson(url);
    const timer = window.setInterval(() => {
      fethJson(url);
    }, timerSeconds * 1000);

    return () => clearInterval(timer);
  }, [timerSeconds, url]);

  return [items, isLoading];
};

export default useAutoFetchJson;
