import Movie from "../Movie/Movie";

function MovieInfo( {onExitClick, singleMovieInfo} ) {
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
		<div className="movieInfo" id={singleMovieInfo.id} onClick={onExitClick}>
			<img src = {singleMovieInfo.backdrop_path} alt = {singleMovieInfo.title}/>   
			<p className="synopsis">{singleMovieInfo.overview}</p>
      <p className="rating">{singleMovieInfo.average_rating}</p>
      <p className="poster">{singleMovieInfo.title}</p>
      <p className="runTime">{singleMovieInfo.runtime}</p>
      <p className="genres">{singleMovieInfo.genres}</p>
		</div>
	)
}

export default MovieInfo;