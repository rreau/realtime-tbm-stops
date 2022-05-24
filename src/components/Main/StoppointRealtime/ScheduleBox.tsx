import WaitTimeCard from './WaitTimeCard';

interface IElement {
  line: string;
  destination: string;
  id: string;
}

interface IScheduleBox {
  stopPoints: Array<IElement>;
}

const ScheduleBox = ({ stopPoints }: IScheduleBox) => {
  return (
    <div className="flex flex-wrap">
      {stopPoints.map((e: IElement, i: number) => (
        <WaitTimeCard
          key={e.destination + e.id + i}
          line={e.line}
          destination={e.destination}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default ScheduleBox;
