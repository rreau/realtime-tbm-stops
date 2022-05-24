import { useContext } from 'react';
import { StopPointContext } from '@contexts/StopPointListener';
import ScheduleBox from './RealtimeStops/ScheduleBox';

const Main = () => {
  const stopPointData = useContext(StopPointContext);
  const stopPoint = stopPointData?.stopPoint;

  return <div>{stopPoint && <ScheduleBox stopPoints={stopPoint} />}</div>;
};

export default Main;
