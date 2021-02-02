import { ListGroup } from 'react-bootstrap';
import DeleteButton from "./Button/DeleteButton";
import WatchedButton from "./Button/WatchedButton";



const OneMovie = ({movie ,deleteMovis}) => {
    
    
return(

    <div>
       
      <ListGroup.Item>{movie.name}</ListGroup.Item>
      <DeleteButton movieId={movie.id} deleteMovis={deleteMovis} />
      <WatchedButton movieId={movie.id} deleteMovis={deleteMovis} />
     </div>

);


};


export default OneMovie;