// import logo from './logo.svg';
import './App.css';
import movieData from '../../data';
import AllMovies from '../AllMovies/AllMovies';
import MovieInfo from '../MovieInfo/MovieInfo';
import  { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState(movieData);
	const [showMovieInfo, setShowMovieInfo] = useState(false);

	const handleMovieClick = () => {
		setShowMovieInfo(true);
		//log(event.target.closet.div.id)
		console.log("hit handleMovieClick");
	}

	const handleBackClick = () => {
		setShowMovieInfo(false);
		console.log("hit handleBackClick");
	}
	
  function fetchAllMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovies(data.movies))
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
    fetchAllMovies()
  },[])
	//function fetchStuff(){fetch().then(setMovies(data))}
	// useEffect(() => fetchStuff() , } []
	// .then(data => setIdeas([...ideas, ...data]))


  return (
    <div className="App">
      <header className="App-header">
        <h1>All Movies</h1>
      </header>
      <main>
				{!showMovieInfo ? (
					<AllMovies movies={movies} onMovieClick={handleMovieClick}/>
				) : (
					<MovieInfo onExitClick={handleBackClick} />
				)
				}
      </main>
    </div>
  );
}

export default App;

	// useEffect(() => {
	// 	console.log('handleMovieClick');
	// },[showMovieInfo])

	// function showMovieStuff({name, isMovie}) {
	// 	if(isMovie) {
	// 		return <AllMovies movies={movies}/>
	// 	}else {
	// 		return <MovieInfo/>
	// 	}
	// }