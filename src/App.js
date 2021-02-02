import logo from './logo.svg';
import './App.css';
import MovieList from "./components/MovieList"
import AddMovie from "./components/AddMovie"



function App() {
  
  return (
    <div>
      <AddMovie />
      <h1>My Movies List</h1>
      <MovieList/>


      
    </div>
  );
}

export default App;
