import { useContext } from 'react';
import { StopPointContext } from '../App';
import ScheduleBox from './StoppointRealtime/ScheduleBox';

const Main = () => {
  const stopPointData = useContext(StopPointContext);
  const stopPoint = stopPointData?.stopPoint;

  return <div>{stopPoint && <ScheduleBox stopPoints={stopPoint} />}</div>;
};

export default Main;
