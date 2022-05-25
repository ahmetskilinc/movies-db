// types
import type { PopularMoviesProps } from "../../models/props";

import axios from "axios";
import { key, endpoint } from "../../lib/api_lib";
// components
import { GetServerSideProps } from "next";
import Head from "next/head";
import MoviesList from "../../components/MoviesList";

const MoviePopular = (props: PopularMoviesProps) => {
	const { popularMovies1, popularMovies2, popularMovies3, popularMovies4 } = props;
	return (
		<>
			<Head>
				<title>Popular Movies | MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{popularMovies1 !== null && <MoviesList movies={popularMovies1} listTitle="Popular movies this week" type="movie" compact={false} />}
				<div className="divider"></div>
				{popularMovies2 !== null && <MoviesList movies={popularMovies2} type="movie" compact={false} />}
				<div className="divider"></div>
				{popularMovies3 !== null && <MoviesList movies={popularMovies3} type="movie" compact={false} />}
				<div className="divider"></div>
				{popularMovies4 !== null && <MoviesList movies={popularMovies4} type="movie" compact={false} />}
			</main>
		</>
	);
};

export default MoviePopular;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const popularMovies1 = await axios({
		method: "get",
		url: `${endpoint}movie/popular?${key}&language=en-US&page=1`,
	}).then((response) => {
		return response.data.results;
	});

	const popularMovies2 = await axios({
		method: "get",
		url: `${endpoint}movie/popular?${key}&language=en-US&page=2`,
	}).then((response) => {
		return response.data.results;
	});

	const popularMovies3 = await axios({
		method: "get",
		url: `${endpoint}movie/popular?${key}&language=en-US&page=3`,
	}).then((response) => {
		return response.data.results;
	});

	const popularMovies4 = await axios({
		method: "get",
		url: `${endpoint}movie/popular?${key}&language=en-US&page=4`,
	}).then((response) => {
		return response.data.results;
	});

	return {
		props: {
			popularMovies1,
			popularMovies2,
			popularMovies3,
			popularMovies4,
		},
	};
};
