import { useEffect } from 'react';
import { hmsToSeconds, secondsToHms } from '@utils/convertTime';
import useDecrement from './useDecrement';

const useCountdown = (waittime: string): string => {
  const [count, decrement] = useDecrement(hmsToSeconds(waittime));

  useEffect(() => {
    const timer = window.setInterval(() => decrement(), 1000);

    return () => clearInterval(timer);
  }, [decrement]);

  return secondsToHms(count);
};

export default useCountdown;
