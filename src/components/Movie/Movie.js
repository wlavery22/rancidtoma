import { useEffect, useState } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import './Movie.css';


function Movie({ id, posterPath, title, rating , onMovieClick}){
	const [movieInfo, setMovieInfo] = useState(true);
	// setMovieInfo(false);
	const onClick = () => {
		setMovieInfo(false);
	};

	useEffect(() => {
		// console.log("changed value",movieInfo);
		console.log("handleMovieClick in movie.js" , onMovieClick);
	}, [movieInfo])

	return (
		<div className='movie-card' id={id} onClick={onMovieClick} >
			<img src = {posterPath} alt = {title}/>
			<h2>{rating}</h2>
		</div>
	)
}

export default Movie;