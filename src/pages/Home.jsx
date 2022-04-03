import { lazy, Suspense, useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Hero = lazy(() => import("../components/Hero"));
const MoviesList = lazy(() => import("../components/MoviesList"));

const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [popularTvShows, setPopularTvShows] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [topRatedTvShows, setTopRatedTvShows] = useState([]);
	const [heroMovies, setHeroMovies] = useState([]);

	const fetchPopularMovies = async () => {
		const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6b40bff7fc9e4ef1a2d27fe2e3894564&language=en-US&page=1");
		const data = await response.json();
		return data;
	};

	const fetchPopularTvShows = async () => {
		const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=6b40bff7fc9e4ef1a2d27fe2e3894564&language=en-US&page=1");
		const data = await response.json();
		return data;
	};

	const fetchTopRatedMovies = async () => {
		const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=6b40bff7fc9e4ef1a2d27fe2e3894564&language=en-US&page=1");
		const data = await response.json();
		return data;
	};

	const fetchTopRatedTvShows = async () => {
		const response = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=6b40bff7fc9e4ef1a2d27fe2e3894564&language=en-US&page=1");
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		fetchPopularMovies().then((data) => {
			setHeroMovies([
				data.results[Math.floor(Math.random() * (20 - 0) + 0)],
				data.results[Math.floor(Math.random() * (20 - 0) + 0)],
				data.results[Math.floor(Math.random() * (20 - 0) + 0)],
			]);
			setPopularMovies(data.results);
		});

		fetchPopularTvShows().then((data) => {
			setPopularTvShows(data.results);
		});

		fetchTopRatedMovies().then((data) => {
			setTopRatedMovies(data.results);
		});

		fetchTopRatedTvShows().then((data) => {
			setTopRatedTvShows(data.results);
		});
	}, []);

	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Hero movies={heroMovies} />
			<MoviesList movies={popularMovies} listTitle="Popular movies this week" />
			<MoviesList movies={popularTvShows} listTitle="Popular TV shows this week" />
			<MoviesList movies={topRatedMovies} listTitle="Top rated movies" />
			<MoviesList movies={topRatedTvShows} listTitle="Top rated TV shows" />
		</Suspense>
	);
};

export default Home;
