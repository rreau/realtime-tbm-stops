import { ReactElement } from 'react';

interface IWaitTimeTable {
  line: string;
  direction: string;
  children: ReactElement[];
}

const WaitTimeTable = ({ line, direction, children }: IWaitTimeTable) => {
  return (
    <table className="m-5 border border-slate-40 border-collapse">
      <thead>
        <tr>
          <th className="text-left" colSpan={3}>{`${line} > ${direction}`}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default WaitTimeTable;
