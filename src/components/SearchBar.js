import { SearchBarStyled } from "../styles";
const SearchBar = ({ setQuery }) => {
    return (
      <SearchBarStyled
        placeholder="Search for your movie "
        onChange={(event) => setQuery(event.target.value)}
      />
    );
  };
  
  export default SearchBar;