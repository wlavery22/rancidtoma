import './App.css';
import movieData from '../../data';
import AllMovies from '../AllMovies/AllMovies';
import MovieInfo from '../MovieInfo/MovieInfo';
import Error from '../Error/Error.js'
import { Routes, Route, Link } from 'react-router-dom';
import  { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState(movieData);
	const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [movieId, setMovieId] = useState(0);
	const [singleMovieInfo, setSingleMovieInfo] = useState({});
  const [error, setError] = useState("")
  

  function handleMovieClick() {
		setShowMovieInfo(true);
  }

	function handleError(error) {
		setError(error)
	}

	function updateMovieInfo(info) {
		setSingleMovieInfo(info)
	}

	function updateMovieId(id) {
		setMovieId(id);
	}

	const handleBackClick = () => {
		setShowMovieInfo(false);
	}
	
  function fetchAllMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
        } else {
        return response.json()
        }
    })
    .then(data => setMovies(data.movies))
    .catch(error => handleError(error.message))
  }

  useEffect(() => {
    fetchAllMovies()
  },[])

	// useEffect(() => {
	// 	console.log('Movie Info Object:',singleMovieInfo);
	// },[singleMovieInfo])

	// useEffect(() => {
	// 	console.log('Got error: ',error);
	// },[error])

	// useEffect(() => {
	// 	console.log("movieId in App.js",movieId);
	// },[movieId])

  return (
    <div className="App">
			<Link to={`/`}>
      <header className="App-header">
        <h1>Rancid Tomatillos</h1>
      </header>
			</Link>
      <main>
				<Routes>
					<Route path='/' element={<AllMovies movies={movies} updateMovieId={updateMovieId} updateMovieInfo={updateMovieInfo} handleError={handleError}/>}/>
					<Route path='/movie/:id' element={<MovieInfo singleMovieInfo={singleMovieInfo}/>}/>
					<Route path='*' element={<Error />}/>
				</Routes>
				{/* <Link to={`/${id}`}></Link> */}
		 {/* {error ? (
			<h2>Error{error}</h2>
		) : !showMovieInfo ? (
			<AllMovies movies={movies} onMovieClick={handleMovieClick} 
			updateMovieId={updateMovieId} updateMovieInfo={updateMovieInfo} 
			handleError={handleError}/>
		) : (
			<MovieInfo onExitClick={handleBackClick} singleMovieInfo={singleMovieInfo} />
		)}  */}
      </main>
    </div>
  );
}

//http://localhost:3000/24
//http://localhost:3000/*

export default App;
