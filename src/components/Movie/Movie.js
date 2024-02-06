import { useEffect, useState , useRef } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import './Movie.css';
import PropTypes from 'prop-types';
import { useParams, Link, Outlet } from 'react-router-dom';


function Movie({ id, posterPath, title, rating, onMovieClick, updateMovieId, updateMovieInfo, handleError }){
	const [movieInfo, setMovieInfo] = useState(true);
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
			onMovieClick()
		})
    .catch(error => {
		handleError(error.message)
	})

	}
	return (
		<Link to={`/${id}`}>
		<div className='movie-card' id={id} onClick={handleClick} >
			<img src = {posterPath} alt = {title}/>
			<h2>{rating}</h2>
		</div>
		</Link>
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
  onMovieClick: PropTypes.func.isRequired,
  updateMovieId: PropTypes.func.isRequired,
  updateMovieInfo: PropTypes.func.isRequired,
}
