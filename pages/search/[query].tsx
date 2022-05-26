// types
import type { GetServerSideProps } from "next";
import type { SearchProps } from "../../models/props";

import { key, endpoint } from "../../lib/api_lib";
import type { Movies } from "../../models/movie_popular";
import type { TvPopular } from "../../models/tv_popular";
// components
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

// dynamic components
const MoviesList = dynamic(() => import("../../components/MoviesList"));

const Home = (props: SearchProps) => {
	const { moviesSearch, tvSearch } = props;
	const router = useRouter();
	const { query } = router.query;

	return (
		<>
			<Head>
				<title>Search {query} | MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="pt-5">
				<form
					className="flex items-center w-full justify-center search-form"
					action=""
					onSubmit={(e) => {
						e.preventDefault();
						const target = document.getElementById("search") as HTMLInputElement;
						const searchQuery = target.value;

						router.push(`/search/${searchQuery}`);
					}}
				>
					<input type="search" placeholder="Search..." className="input input-primary input-lg w-full max-w-lg" id="search" />
					<button className="btn btn-primary btn-lg btn-square">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
				</form>
				{moviesSearch !== null && <MoviesList movies={moviesSearch} listTitle={`${query} in Movies`} type="movie" compact={false} />}
				<div className="divider"></div>
				{tvSearch !== null && <MoviesList movies={tvSearch} listTitle={`${query} in TV`} type="tv" compact={false} />}
			</main>
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { query } = context.query;
	const moviesSearch = await axios({
		method: "get",
		url: `${endpoint}search/movie?${key}&page=1&query=${encodeURI(query as string)}&include_adult=true`,
	}).then((response) => {
		return response.data.results.map((item: Movies.Result) => {
			return {
				id: item.id,
				title: item.title,
				poster_path: item.poster_path,
			};
		});
	});

	const tvSearch = await axios({
		method: "get",
		url: `${endpoint}search/tv?${key}&page=1&query=${encodeURI(query as string)}&include_adult=true`,
	}).then((response) => {
		return response.data.results.map((item: TvPopular.Result) => {
			return {
				id: item.id,
				name: item.name,
				poster_path: item.poster_path,
			};
		});
	});
	return {
		props: {
			moviesSearch,
			tvSearch,
		},
	};
};
