import { IStopData } from '@constants/types';
import { createContext, useMemo, useState } from 'react';

interface IStopPointContext {
  stopPoint: IStopData[];
  setStopPoint: React.Dispatch<React.SetStateAction<IStopData[]>>;
}

interface IStopPointListener {
  children: JSX.Element[];
}

export const StopPointContext = createContext<IStopPointContext | null>(null);

export const StopPointListener = ({ children }: IStopPointListener) => {
  const [stopPoint, setStopPoint] = useState<IStopData[]>([]);

  const stopPointData = useMemo(
    () => ({
      stopPoint,
      setStopPoint,
    }),
    [stopPoint]
  );

  return <StopPointContext.Provider value={stopPointData}>{children}</StopPointContext.Provider>;
};
