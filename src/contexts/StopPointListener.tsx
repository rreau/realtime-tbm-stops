import { createContext, useMemo, useState } from 'react';

interface IStopPointElement {
  destination: string;
  id: string;
  line: string;
}

interface IStopPointContext {
  stopPoint: IStopPointElement[];
  setStopPoint: React.Dispatch<React.SetStateAction<IStopPointElement[]>>;
}

interface IStopPointListener {
  children: JSX.Element[];
}

export const StopPointContext = createContext<IStopPointContext | null>(null);

export const StopPointListener = ({ children }: IStopPointListener) => {
  const [stopPoint, setStopPoint] = useState([
    {
      id: '3737/B',
      line: 'Tram B',
      destination: 'BORDEAUX Berges de la Garonne / BORDEAUX Claveau',
    },
  ]);

  const stopPointData = useMemo(
    () => ({
      stopPoint,
      setStopPoint,
    }),
    [stopPoint]
  );

  return <StopPointContext.Provider value={stopPointData}>{children}</StopPointContext.Provider>;
};
