import { ReactElement } from 'react';

interface IWaitTimeTable {
  line: string;
  destination: string;
  children: ReactElement[];
}

const WaitTimeTable = ({ line, destination, children }: IWaitTimeTable) => {
  return (
    <table className="m-2">
      <thead>
        <tr>
          <th className="text-left" colSpan={3}>{`${line} > ${destination}`}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default WaitTimeTable;
