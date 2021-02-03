import { SearchBarStyled } from "../styles";
const SearchBar = ({ setQuery ,setQuery1}) => {
    return (
      <SearchBarStyled
        placeholder="Search for your movie "
        onChange={(event) => setQuery(event.target.value) || setQuery1(event.target.value)}
      />
    );
  };
  
  export default SearchBar;