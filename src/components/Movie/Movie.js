import { useEffect, useState , useRef } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import './Movie.css';
import PropTypes from 'prop-types';


function Movie({ id, posterPath, title, rating, onMovieClick, updateMovieId, updateMovieInfo, handleError }){
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
		<div className='movie-card' id={id} onClick={handleClick} >
			<img src = {posterPath} alt = {title}/>
			<h2>{rating}</h2>
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
  onMovieClick: PropTypes.func.isRequired,
  updateMovieId: PropTypes.func.isRequired,
  updateMovieInfo: PropTypes.func.isRequired,
}
