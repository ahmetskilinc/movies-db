import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, type }) => {
	const { poster_path, id } = movie;

	return (
		<Link to={`${type === "tv" ? "tv" : "movie"}/${id}`} className="flex-shrink-0 shadow-md rounded-xl relative">
			<img
				loading="lazy"
				src={poster_path ? `https://image.tmdb.org/t/p/w185${poster_path}` : "/images/placeholder.jpeg"}
				alt={type === "tv" ? movie.name : movie.title}
				width={isMobile ? "96px" : "192px"}
				height={isMobile ? "144px" : "288px"}
				className="w-24 lg:w-48 h-36 lg:h-72 object-cover rounded-xl shadow-2xl"
			/>
		</Link>
	);
};

export default MovieCard;
