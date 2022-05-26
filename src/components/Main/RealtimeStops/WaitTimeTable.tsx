import { ReactElement } from 'react';

interface IWaitTimeTable {
  line: string;
  destination: string;
  stopName: string;
  children: ReactElement[];
}

const WaitTimeTable = ({ line, destination, stopName, children }: IWaitTimeTable) => {
  return (
    <table className='m-2'>
      <thead>
        <tr>
          <th className='text-left' colSpan={3}>
            {`${stopName} - ${line}`} <br /> {destination}
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default WaitTimeTable;
