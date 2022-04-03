import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Hero = lazy(() => import("../components/Hero"));
const MoviesList = lazy(() => import("../components/MoviesList"));

const Movie = () => {
	const params = useParams();
	const [movie, setMovie] = useState([]);

	const fetchMovie = async (id) => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6b40bff7fc9e4ef1a2d27fe2e3894564`);
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		fetchMovie(params.id).then((data) => {
			setMovie(data);
		});
	}, [params]);

	return <Suspense fallback={<LoadingSpinner />}>{movie ? <code>{JSON.stringify(movie)}</code> : <LoadingSpinner />}</Suspense>;
};

export default Movie;
