import movies from "../Movies"
import { ListGroup } from 'react-bootstrap';
import OneMovie from "./OneMovie";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

const MovieList = () => {
    const movies=useSelector((state)=>state.movies);
    const [query, setQuery] = useState("");
    

    const movielist = movies
    .filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
    ).map((movie) => 
        <OneMovie key = {movie.id} movie={movie}/>);
        
    
        return (
            <div>
                
                <ListGroup>
                 <ListGroup.Item><SearchBar setQuery={setQuery} /></ListGroup.Item>
                  {movielist}
               </ListGroup>
               
           </div>
              
               
            
        );





    


};


export default MovieList;