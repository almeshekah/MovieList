import logo from './logo.svg';
import './App.css';
import MovieList from "./components/MovieList"
import AddMovie from "./components/AddMovie"
import WatchedList from './components/WatchedList';




function App() {
  
  return (
    <div>
      <AddMovie />
      <h1>My Movies List</h1>
      <MovieList/>
      <h1>My Watched List</h1>
      <WatchedList/>


      
    </div>
  );
}

export default App;
