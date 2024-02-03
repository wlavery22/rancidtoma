import { useEffect, useState , useRef } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import './Movie.css';


function Movie({ id, posterPath, title, rating , onMovieClick, updateMovieId, updateMovieInfo }){
	const [movieInfo, setMovieInfo] = useState(true);
	const myElementRef = useRef(null);
	// setMovieInfo(false);
	// const onClick = () => {
	// 	setMovieInfo(false);
	// };

	// useEffect(() => {
	// 	// console.log("changed value",movieInfo);
	// 	console.log("handleMovieClick in movie.js" , onMovieClick);
	// }, [movieInfo])
	const handleClick = () => {
		console.log('Specific Movie Id in Movie.js: ', id);
		// console.log('Specific Movie Id type: ', typeof id);
		
		// fetch

		fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
		.then(data => updateMovieInfo(data.movie))
    // .then(data => console.log("data from movies.js",data.movie))
    .catch(error => console.log(error.message))
		updateMovieId(id);
		onMovieClick();
	}
	return (
		<div className='movie-card' id={id} onClick={handleClick} >
			<img src = {posterPath} alt = {title}/>
			<h2>{rating}</h2>
		</div>
	)
}

export default Movie;