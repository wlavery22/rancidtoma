import Movie from "../Movie/Movie";

function MovieInfo( {handleBackClick} ) {
	const dummyMovie = {
		"movie":
		{
			id: 1,
			title: "Fake Movie Title",
			poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
			backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
			release_date: "2019-12-04",
			overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
			average_rating: 6,
			genres: ["Drama"],
			budget: 63000000,
			revenue: 100853753,
			runtime: 139,
			tagline: "It's a movie!"
		}
		// return (the strucutre of the div that holds the movieInfo)
	}
	console.log('in MovieInfo');
	return (
		<div className="movieInfo" id={dummyMovie.movie.id} style={{background_image: new URL(dummyMovie.movie.backdrop_path)}} onClick={handleBackClick}>   
			<p className="synopsis">{dummyMovie.movie.overview}</p>
      <p className="rating">{dummyMovie.movie.average_rating}</p>
      <p className="poster">{dummyMovie.movie.title}</p>
      <p className="runTime">{dummyMovie.movie.runtime}</p>
      <p className="genres">{dummyMovie.movie.genres}</p>
		</div>
	)
}

export default MovieInfo;