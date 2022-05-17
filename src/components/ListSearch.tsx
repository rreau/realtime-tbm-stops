import { ReactElement } from 'react';

interface IListSearch {
  title: string;
  children: ReactElement[];
}

const ListSearch = ({ title, children }: IListSearch) => {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <span>{title}</span>
      <ul className="ul-primary">{children}</ul>
    </div>
  );
};

export default ListSearch;
