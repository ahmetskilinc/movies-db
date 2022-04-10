import { lazy, useEffect, useState } from "react";

const HomeHero = lazy(() => import("../components/HomeHero"));
const MoviesList = lazy(() => import("../components/MoviesList"));

const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [popularTvShows, setPopularTvShows] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [topRatedTvShows, setTopRatedTvShows] = useState([]);
	const [heroMovies, setHeroMovies] = useState([]);

	const fetchPopularMovies = async () => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`);
		const data = await response.json();
		return data;
	};

	const fetchPopularTvShows = async () => {
		const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`);
		const data = await response.json();
		return data;
	};

	const fetchTopRatedMovies = async () => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`);
		const data = await response.json();
		return data;
	};

	const fetchTopRatedTvShows = async () => {
		const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`);
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		fetchPopularMovies().then((data) => {
			setPopularMovies(data.results);
			setHeroMovies((oldArray) => [...oldArray, { obj: data.results[Math.floor(Math.random() * (20 - 0) + 0)], type: "movie", title: "Popular Movie" }]);
		});

		fetchPopularTvShows().then((data) => {
			setPopularTvShows(data.results);
			setHeroMovies((oldArray) => [...oldArray, { obj: data.results[Math.floor(Math.random() * (20 - 0) + 0)], type: "tv", title: "Popular TV Show" }]);
		});

		fetchTopRatedMovies().then((data) => {
			setTopRatedMovies(data.results);
			setHeroMovies((oldArray) => [
				...oldArray,
				{ obj: data.results[Math.floor(Math.random() * (20 - 0) + 0)], type: "movie", title: "Top Rated Movie" },
			]);
		});

		fetchTopRatedTvShows().then((data) => {
			setTopRatedTvShows(data.results);
			setHeroMovies((oldArray) => [...oldArray, { obj: data.results[Math.floor(Math.random() * (20 - 0) + 0)], type: "tv", title: "Top Rated TV Show" }]);
		});
	}, []);

	return (
		<>
			<HomeHero movies={heroMovies} />
			<MoviesList movies={popularMovies} listTitle="Popular movies this week" type="movie" />
			<MoviesList movies={popularTvShows} listTitle="Popular TV shows this week" type="tv" />
			<MoviesList movies={topRatedMovies} listTitle="Top rated movies" type="movie" />
			<MoviesList movies={topRatedTvShows} listTitle="Top rated TV shows" type="tv" />
		</>
	);
};

export default Home;
