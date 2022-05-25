import { useState } from 'react';

const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const toggle = () => {
    setState((s) => !s);
  };

  return [state, toggle];
};

export default useToggle;
