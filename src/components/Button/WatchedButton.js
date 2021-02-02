// Styling
import { Button } from 'react-bootstrap';
import {watchedMovie} from "../../store/actions";
import {useDispatch} from "react-redux";


const WatchedButton = (props) => {
  const dispatch =useDispatch();

  return (
    <Button onClick={() => dispatch(watchedMovie(props.movieId))}>
      Watched
    </Button>
  );
};

export default WatchedButton;