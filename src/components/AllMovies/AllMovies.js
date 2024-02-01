import './AllMovies.css';
import Movie from '../Movie/Movie';
function AllMovies( {movies} ){
	const moviesCards = movies.map(movie => {
		return (
			<Movie 
				id={movie.id}
				key={movie.id}
				posterPath={movie.poster_path}
				title={movie.title}
				rating={Math.round(movie.average_rating * 10) / 10}
			/>
		)
	})
	return (
		<div className='all-movies-container'>
			{moviesCards}
		</div>
	)
}

export default AllMovies;