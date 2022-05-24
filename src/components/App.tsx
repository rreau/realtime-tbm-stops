import { createContext, useMemo, useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

interface IStopPointElement {
  destination: string;
  id: string;
  line: string;
}

interface IStopPointContext {
  stopPoint: IStopPointElement[];
  setStopPoint: React.Dispatch<React.SetStateAction<IStopPointElement[]>>;
}

export const StopPointContext = createContext<IStopPointContext | null>(null);

const App = () => {
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

  return (
    <div className="h-screen w-screen">
      <StopPointContext.Provider value={stopPointData}>
        <Header />
        <Main />
      </StopPointContext.Provider>
    </div>
  );
};

export default App;
