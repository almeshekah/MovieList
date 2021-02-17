
import { ListGroup } from 'react-bootstrap';

import OneMovie from "./OneMovie";
import { useSelector } from "react-redux";


const WatchedList = () => {
    const movies = useSelector((state) =>
    state.movies.filter((movie) => movie.status)
  );
  const unwmoviesList = movies.map((movie) => (
    <OneMovie movie={movie} key={movie.id} />));
    

    return (
        <ListGroup>
            {unwmoviesList}
        </ListGroup>
        
    );
};
export default WatchedList;