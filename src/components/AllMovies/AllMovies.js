import './AllMovies.css';
import Movie from '../Movie/Movie';
import { useEffect , useState} from 'react';
import PropTypes from 'prop-types';

function AllMovies( {movies , onMovieClick, updateMovieId , updateMovieInfo, handleError} ){
	const [testStuff, setTestStuff] = useState(10);

	const moviesCards = movies.map(movie => {
		return (
			<Movie 
				id={movie.id}
				key={movie.id}
				posterPath={movie.poster_path}
				title={movie.title}
				rating={Math.round(movie.average_rating * 10) / 10}
				onMovieClick={onMovieClick}
				updateMovieId={updateMovieId}
				updateMovieInfo={updateMovieInfo}
				handleError={handleError}
			/>
		)
	})
	// useEffect(() => {
	// 	console.log("onMovieClick",onMovieClick);
	// }, [moviesCards])

	return (
		<div className='all-movies-container'>
			{moviesCards}
		</div>
	)
}

export default AllMovies;

AllMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  updateMovieId: PropTypes.func.isRequired,
  updateMovieInfo: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
}