import { useCallback, useState } from 'react';
import Navbar from './Navbar';
import StopAreaList from './SearchResult/StopAreaList';
import StopPointList from './SearchResult/StopPointList';

const Header = () => {
  const [search, setSearch] = useState('');
  const [stopArea, setStopArea] = useState('');

  const onChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return (
    <header className="flex flex-col">
      <Navbar onChangeSearch={onChangeSearch} />
      {search && <StopAreaList search={search} onClickItem={setStopArea} />}
      {stopArea && <StopPointList id={stopArea} />}
    </header>
  );
};

export default Header;
