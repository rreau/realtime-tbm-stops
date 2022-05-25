import { useState } from 'react';

const useToggle = (defaultValue = false): [boolean, () => void] => {
  const [state, setState] = useState(defaultValue);

  const toggle = () => {
    setState((s) => !s);
  };

  return [state, toggle];
};

export default useToggle;
