import './App.css';
import movieData from '../../data';
import AllMovies from '../AllMovies/AllMovies';
import MovieInfo from '../MovieInfo/MovieInfo';
import  { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState(movieData);
	const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [movieId, setMovieId] = useState(0);
	const [singleMovieInfo, setSingleMovieInfo] = useState({});
  

  function handleMovieClick() {
		//fetch().then(setShowMovieInfo(true))
		// fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    // .then(response => response.json())
    // .then(data => setSingleMovieInfo(data.movie))
		// .then(setShowMovieInfo(true))
    // .catch(error => console.log(error.message))
		setShowMovieInfo(true);
    
		console.log("Id value:",movieId);
		// console.log("hit handleMovieClick");
  }

	function updateMovieInfo(info) {
		setSingleMovieInfo(info)
	}

	function updateMovieId(id) {
		setMovieId(id);
	}
	// const handleMovieClick = () => {
	// 	setShowMovieInfo(true);
	// 	console.log();
	// 	console.log("hit handleMovieClick");
	// }

	const handleBackClick = () => {
		setShowMovieInfo(false);
		// console.log("hit handleBackClick");
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

	useEffect(() => {
		console.log('Movie Info Object:',singleMovieInfo);
	},[singleMovieInfo])

	useEffect(() => {
		console.log("movieId in App.js",movieId);
		// fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    // .then(response => response.json())
    // .then(data => setSingleMovieInfo(data.movie))
		// .then(setShowMovieInfo(true))
    // .catch(error => console.log(error.message))
	},[movieId])
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
					<AllMovies movies={movies} onMovieClick={handleMovieClick} updateMovieId={updateMovieId} updateMovieInfo={updateMovieInfo}/>
				) : (
					<MovieInfo onExitClick={handleBackClick} singleMovieInfo={singleMovieInfo} />
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