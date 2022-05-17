import { useCallback, useState } from 'react';
import SearchBar from './SearchBar';
import StopAreaList from './StopAreaList';
import StopPointList from './StopPointList';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const [stopArea, setStopArea] = useState('');
  const [scheduleID, setScheduleID] = useState('');

  const onChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  scheduleID && console.log(`https://ws.infotbm.com/ws/1.0/get-realtime-pass/${scheduleID}`);

  return (
    <div className="flex flex-col m-10">
      <SearchBar onChange={onChangeSearch} />
      <div className="flex flex-row space-x-10">
        {search && <StopAreaList search={search} onClickItem={setStopArea} />}
        {stopArea && <StopPointList id={stopArea} onClickItem={setScheduleID} />}
      </div>
    </div>
  );
};

export default SearchBox;
