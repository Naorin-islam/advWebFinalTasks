interface SearchBarProps {
    query: string;
    onQueryChange: (value: string) => void;
  }
  
  function SearchBar({
    query,
    onQueryChange
  }: SearchBarProps) {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or major..."
          value={query}
          onChange={(event) =>
            onQueryChange(event.target.value)
          }
        />
      </div>
    );
  }
  
  export default SearchBar;