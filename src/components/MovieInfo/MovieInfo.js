import Movie from "../Movie/Movie";
import './MovieInfo.css';
import Error from "../Error/Error";
import PropTypes from 'prop-types';
import { useParams, Link, Outlet } from 'react-router-dom';


function MovieInfo({ singleMovieInfo }) {
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
	}
	let testVariable = useParams();
	if (singleMovieInfo.id) {
		return (
			<div className="movieInfo" id={singleMovieInfo.id}>
				<img src={singleMovieInfo.backdrop_path} alt={singleMovieInfo.title} />
				<h1 className="poster">{singleMovieInfo.title}</h1>
				<p className="synopsis">{singleMovieInfo.overview}</p>
				<div className="smallInfo">
					<p className="rating">Rating: {singleMovieInfo.average_rating}</p>
					<p className="genres">Genres: {singleMovieInfo.genres.join(", ")}</p>
					<p className="runTime">Runtime : {singleMovieInfo.runtime}</p>
				</div>
				<Link to={`/`}>
					<input type="button" className="exitButton" value={'Click to Leave'}></input>
				</Link>
			</div>
		)
	} else {
		return <Error />
	}

}

export default MovieInfo;

MovieInfo.propTypes = {
	singleMovieInfo: PropTypes.object.isRequired,
}