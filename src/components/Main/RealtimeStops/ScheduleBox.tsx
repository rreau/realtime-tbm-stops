import { IStopData } from '@constants/types';
import WaitTimeCard from './WaitTimeCard';

interface IScheduleBox {
  stopPoints: Array<IStopData>;
}

const ScheduleBox = ({ stopPoints }: IScheduleBox) => {
  return (
    <div className='flex flex-wrap'>
      {stopPoints.map((e: IStopData, i: number) => (
        <WaitTimeCard
          key={e.destination + e.id + i}
          stopName={e.stopName}
          line={e.line}
          destination={e.destination}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default ScheduleBox;
