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
    const [query1, setQuery1] = useState("");
    

    const movielist = 
    movies.filter((movie) => movie.watched === false &&
    movie.name.toLowerCase().includes(query.toLowerCase()) ).map((movie) => 
        <OneMovie key = {movie.id} movie={movie}/>);

        const movielist1 = 
    movies.filter((movie) => movie.watched === true &&
    movie.name.toLowerCase().includes(query1.toLowerCase()) ).map((movie) => 
        <OneMovie key = {movie.id} movie={movie}/>);
       
        return (
            <div>
  
                <ListGroup>
                 <ListGroup.Item><SearchBar setQuery={setQuery} /></ListGroup.Item>
                  {movielist}
                  <br></br>
                  <ListGroup.Item><SearchBar setQuery1={setQuery1} /></ListGroup.Item>
                  <ListGroup.Item>{movielist1}</ListGroup.Item>
               </ListGroup>
               
           </div>
              
               
            
        );





    


};


export default MovieList;