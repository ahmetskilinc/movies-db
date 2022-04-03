import { Link } from "react-router-dom";

const MovieCard = ({ movie, type }) => {
	const { poster_path, id } = movie;

	return (
		<Link to={`${type === "tv" ? "tv" : "movie"}/${id}`} className="h-48 w-32 md:h-80 md:w-52 flex-shrink-0 shadow-md rounded-xl relative">
			<div
				className="h-full w-full rounded-xl bg-cover bg-center"
				style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }}
			></div>
		</Link>
	);
};

export default MovieCard;
