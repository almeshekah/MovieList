// Styling
import { Button } from 'react-bootstrap';
import {deleteMovie} from "../../store/actions";
import {useDispatch} from "react-redux";


const DeleteButton = (props) => {
  const dispatch =useDispatch();

  return (
    <Button onClick={() => dispatch(deleteMovie(props.movieId))}>
      Delete
    </Button>
  );
};

export default DeleteButton;