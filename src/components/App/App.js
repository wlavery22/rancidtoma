// import logo from './logo.svg';
import './App.css';
import movieData from '../../data';
import AllMovies from '../AllMovies/AllMovies';
import  { useState } from 'react';


function App() {
  const dummyMovies = [
    {
      "id": 694919,
      "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "title": "Money Plane",
      "average_rating": 6.666666666666667,
      "release_date": "2020-09-29"
    },
    {
      "id": 337401,
      "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      "title": "Mulan",
      "average_rating": 4.909090909090909,
      "release_date": "2020-09-04"
    }
  ]

  const [movies, setMovies] = useState(movieData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>All Movies</h1>
      </header>
      <main>
        <AllMovies movies={movies} />
      </main>
    </div>
  );
}

export default App;
