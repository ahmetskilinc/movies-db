import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LoadingSpinner = lazy(() => import("../components/LoadingSpinner"));
const Hero = lazy(() => import("../components/Hero"));
const Cast = lazy(() => import("../components/Cast"));

const Tv = () => {
	const params = useParams();
	const [movie, setMovie] = useState(null);
	const [credits, setCredits] = useState(null);
	const [externalIds, setExternalIds] = useState(null);

	const fetchMovie = async (id) => {
		const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
		const data = await response.json();
		return data;
	};

	const fetchCredits = async (id) => {
		const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`);
		const data = await response.json();
		return data;
	};

	const fetchExternalIds = async (id) => {
		const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${process.env.REACT_APP_TMDB_KEY}`);
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

	return movie !== null && externalIds !== null && credits !== null ? (
		<>
			<Hero movie={movie} externalIds={externalIds} type="tv" />
			<Cast credits={credits} />
		</>
	) : (
		<LoadingSpinner />
	);
};

export default Tv;
