import { parseISO, format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Movie = () => {
	const params = useParams();
	const [movie, setMovie] = useState(null);
	const [credits, setCredits] = useState(null);
	const [externalIds, setExternalIds] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchMovie = async (id) => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
		const data = await response.json();
		return data;
	};

	const fetchCredits = async (id) => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`);
		const data = await response.json();
		return data;
	};

	const fetchExternalIds = async (id) => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${process.env.REACT_APP_TMDB_KEY}`);
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		fetchMovie(params.id).then((data) => {
			setMovie(data);
		});
		fetchCredits(params.id).then((data) => {
			setCredits(data);
		});
		fetchExternalIds(params.id).then((data) => {
			setExternalIds(data);
		});
	}, [params]);

	return movie !== null && credits !== null && externalIds !== null ? (
		<div
			className="w-full py-8 relative after:content-[''] after:bg-slate-500 after:w-full after:h-full after:bg-opacity-60 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-[1] bg-cover bg-center"
			style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}
		>
			<div className="flex flex-col lg:flex-row justify-center items-center mx-auto lg:w-cs relative z-10 px-6 lg:p-0 ">
				<img
					loading="lazy"
					src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
					alt={movie.title}
					className="w-44 lg:w-72 rounded-xl shadow-2xl lg:mr-6 "
				/>
				<div>
					<h1 className="text-xl lg:text-5xl font-bold text-white">{movie.title}</h1>
					<p className="text-gray-300 pt-2">
						{movie.genres.map((genre, index) => `${genre.name}${index === movie.genres.length - 1 ? "" : ", "}`)}
						{" - "}
						{format(parseISO(movie.release_date), "MMMM dd, yyyy")}
					</p>
					<p className="py-3 text-white">{movie.overview}</p>
					<div className="flex gap-2">
						{externalIds.imdb_id ? <a href={"https://www.imdb.com/title/" + externalIds.imdb_id}>IMDb</a> : null}
						{externalIds.facebook_id ? <a href={"https://www.facebook.com/" + externalIds.facebook_id}>Facebook</a> : null}
						{externalIds.twitter_id ? <a href={"https://www.twitter.com/" + externalIds.twitter_id}>Twitter</a> : null}
						{externalIds.instagram_id ? <a href={"https://www.instagram.com/" + externalIds.instagram_id}>Instagram</a> : null}
					</div>
				</div>
			</div>
		</div>
	) : (
		<LoadingSpinner />
	);
};

export default Movie;
