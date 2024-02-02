import { useState } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import './Movie.css';


function Movie({ id, posterPath, title, rating}){
	const [movieInfo, setMovieInfo] = useState(false);
	const onClick = () => setMovieInfo(true);

	return (
		<div className='movie-card' id={id} onClick={onClick} >
			<img src = {posterPath} alt = {title}/>
			{ movieInfo ? <MovieInfo/> : null}
			<h2>{rating}</h2>
		</div>
	)
}

export default Movie;