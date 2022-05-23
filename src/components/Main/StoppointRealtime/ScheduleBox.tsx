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
    <div className="flex flex-row justify-center items-center">
      {stopPoints.map((e: IElement) => (
        <WaitTimeCard
          key={e.destination + e.id}
          line={e.line}
          direction={e.destination}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default ScheduleBox;
