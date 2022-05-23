import { memo } from 'react';
import { PosItem } from '../../../constants/enum';

interface IListItemSearch {
  title: string;
  id: string;
  line: string;
  destination: string;
  position: PosItem;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const ListItemSearch = ({ title, id, line, destination, position, onClick }: IListItemSearch) => {
  let css = 'li-primary';
  if (position === PosItem.TOP) css += ' rounded-t-lg';
  if (position === PosItem.BOTTOM) css += ' rounded-b-lg';
  if (position === PosItem.ONE) css += ' rounded-t-lg rounded-b-lg';
  return (
    <li
      data-id={id}
      data-line={line}
      data-destination={destination}
      className={css}
      onClick={onClick}
    >
      {title}
    </li>
  );
};

export default memo(ListItemSearch);
