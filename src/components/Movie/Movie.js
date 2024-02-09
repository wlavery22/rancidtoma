import { useEffect, useState , useRef } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import './Movie.css';
import PropTypes from 'prop-types';
import { useParams, Link, Outlet } from 'react-router-dom';


function Movie({ id, posterPath, title, rating, updateMovieId, updateMovieInfo, handleError }){
	const [movieInfo, setMovieInfo] = useState(true);
	const [hasError, setHasError] = useState(false);
	const myElementRef = useRef(null);
	const handleClick = () => {

		fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
		if (!response.ok) {
			throw new Error(`${response.status}: ${response.statusText}`);
		  } else {
			return response.json()
		  }
	})
		.then(data => {
			updateMovieInfo(data.movie)
			updateMovieId(id)
		})
    .catch(error => {
		handleError(error.message)
	})

	}
	return (
		<div className='movie-card' id={id} onClick={handleClick} >
			<Link to={`/movie/${id}`}>
			<img src = {posterPath} alt = {title}/>
			<h2>{title}</h2>
			<h2>Rating: {rating}/10 </h2>
		</Link>
		</div>
	)
}

export default Movie;

function isURL(props, propName, componentName) {
  if (!/^https?:\/\/\S+$/.test(props[propName])) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`
    );
  }
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
	posterPath: isURL,
	title: PropTypes.string.isRequired,
  updateMovieId: PropTypes.func.isRequired,
  updateMovieInfo: PropTypes.func.isRequired,
}
