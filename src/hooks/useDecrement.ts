import { useState } from 'react';

const useDecrement = (start = 0, step = 1): [number, () => void] => {
  const [count, setCount] = useState(start);
  const onDecrement = () => {
    setCount((c) => Math.max(0, c - step));
  };

  return [count, onDecrement];
};

export default useDecrement;
