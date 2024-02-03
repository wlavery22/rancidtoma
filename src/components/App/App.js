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
		console.log("hit handleMovieClick");
	}

	const handleBackClick = () => {
		setShowMovieInfo(false);
		console.log("hit handleBackClick");
	}

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
