import './Movie.css';


function Movie({ id, posterPath, title, rating}){
	return (
		<div className='movie-card' id={id}>
			<img src = {posterPath} alt = {title}/>
			<h2>{rating}</h2>
		</div>
	)
}

export default Movie;