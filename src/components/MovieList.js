import { ListGroup } from 'react-bootstrap';
import OneMovie from "./OneMovie";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { useState } from "react";

const MovieList = () => {
    
    const [query, setQuery] = useState("");

    const movies = useSelector((state) =>
    state.movies.filter((movie) => !movie.status)
  );
  const unwmoviesList = movies.map((movie) => (
    <OneMovie movie={movie} key={movie.id} />));



    return (
            <div>
                
                <ListGroup>
                 <ListGroup.Item><SearchBar setQuery={setQuery} /></ListGroup.Item>
                  {unwmoviesList}
               </ListGroup>

              
               
           </div>
              
               
            
        );





    


};


export default MovieList;