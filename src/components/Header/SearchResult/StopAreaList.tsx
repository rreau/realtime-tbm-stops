import React, { memo, useCallback } from 'react';
import { PosItem } from '../../../constants/enum';
import useFetchJson from '../../../hooks/useFetchJson';
import ListItemSearch from './ListItemSearch';
import ListSearch from './ListSearch';

interface IStopAreaList {
  search: string;
  onClickItem: React.Dispatch<React.SetStateAction<string>>;
}

const SEARCH_STOP_URL = 'https://ws.infotbm.com/ws/1.0/get-schedule/';

const StopAreaList = ({ search, onClickItem }: IStopAreaList) => {
  const [datas, isLoading] = useFetchJson(SEARCH_STOP_URL + search);

  const handleClick = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onClickItem((e.target as HTMLElement).dataset.id as string);
    },
    [onClickItem]
  );

  if (isLoading) return <>Chargement en cours...</>;

  const lengthData = datas.length;

  const elements = datas
    .filter((e: Record<string, string>) => e.type === 'stop_area')
    .map((e: Record<string, string>, i: number) => {
      let position = PosItem.MID;
      if (lengthData - 1 === 1) position = PosItem.ONE;
      if (i === 0) position = PosItem.TOP;
      if (i === lengthData - 1) position = PosItem.BOTTOM;

      return (
        <ListItemSearch
          key={e.id}
          id={e.id}
          position={position}
          title={e.name}
          onClick={handleClick}
        />
      );
    });

  return <ListSearch title="Liste des zones d'arrêts">{elements}</ListSearch>;
};

export default memo(StopAreaList);
