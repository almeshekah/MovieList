import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

import {  useParams } from "react-router-dom";

import { addMovies } from "../store/actions";

 const AddMovie = () => {
    const dispatch = useDispatch();
    const [movie, setMovie] = useState({
        name: "",
        
    });
      const handleChange = (event) => {
        setMovie({ ...movie, [event.target.name]: event.target.value });
    };
    
      
      const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addMovies(movie));
        
        
    };

    return(
        <div>

        <Form onSubmit = {handleSubmit}>
            
            <Form.Group controlId="formBasicName">
            <h1>Create</h1>
                <Form.Label>Movie Name</Form.Label>
                <Form.Control type="text" placeholder="Enter movie Name" 
                name="name"
                
                value={movie.name}
                onChange={handleChange} />
                
            </Form.Group>
            <Button variant="primary" type="submit" size="100px">
                Add

            </Button>
      </Form>

      </div>

    );
};

export default AddMovie;


