import { ListGroup   } from 'react-bootstrap';
import DeleteButton from "./Button/DeleteButton";
import { Button } from 'react-bootstrap';
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { watchedMovie } from "../store/actions";

const OneMovie = ({movie ,deleteMovis}) => {
  const [done, setDone] = useState(movie.status);
  const [Savebtn, setSavebtn] = useState(false);
  const dispatch = useDispatch();
  const statusIcon = movie.status ? (
    <FaCheckCircle color="green" />
  ) : (
    <FaTimesCircle color="red" />
  );
  const toggleStatus = () => {
    setDone(!done);
    
    
  };

  

  
  
    
return(

    <div>
       
      <ListGroup.Item>{movie.name}</ListGroup.Item>
      <DeleteButton movieId={movie.id} deleteMovis={deleteMovis} />
      <Button
            type="button"
            className="btn btn-success"
            onClick={toggleStatus}
          >
            {statusIcon}
          </Button>
    </div >
    
    

      

);


};


export default OneMovie;