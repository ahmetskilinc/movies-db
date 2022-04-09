import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Hero = lazy(() => import("../components/Hero"));
const Cast = lazy(() => import("../components/Cast"));

const Movie = () => {
	const params = useParams();
	const [movie, setMovie] = useState(null);
	const [credits, setCredits] = useState(null);
	const [externalIds, setExternalIds] = useState(null);

	const fetchMovie = async (id) => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
		const data = await response.json();
		console.log(data);
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

	return movie !== null && externalIds !== null ? (
		<Suspense fallback={<LoadingSpinner />}>
			<Hero movie={movie} externalIds={externalIds} type="movie" />
			<Cast credits={credits} />
		</Suspense>
	) : (
		<LoadingSpinner />
	);
};

export default Movie;
