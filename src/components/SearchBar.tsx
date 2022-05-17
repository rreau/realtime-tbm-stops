interface ISearchBar {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: ISearchBar) => {
  return (
    <>
      <input className="m-10 border border-black" placeholder="Search..." onChange={onChange} />
    </>
  );
};

export default SearchBar;
