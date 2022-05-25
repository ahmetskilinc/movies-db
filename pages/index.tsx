// types
import type { GetStaticProps } from "next";
import type { HomeProps } from "../models/props";
import type { Movies } from "../models/movie_popular";
import type { TvPopular } from "../models/tv_popular";
import type { HomeHeroType } from "../models/home_hero";

import { key, endpoint } from "../lib/api_lib";

// components
import dynamic from "next/dynamic";
import Head from "next/head";
import axios from "axios";

// dynamic components
const MoviesList = dynamic(() => import("../components/MoviesList"));
const HomeHero = dynamic(() => import("../components/HomeHero"));

const Home = (props: HomeProps) => {
	const { homeHero, moviesPopular, tvPopular } = props;

	return (
		<>
			<Head>
				<title>MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{homeHero !== null && <HomeHero movies={homeHero} />}
				{moviesPopular !== null && <MoviesList movies={moviesPopular} listTitle="Popular movies this week" type="movie" compact={false} />}
				<div className="divider"></div>
				{tvPopular !== null && <MoviesList movies={tvPopular} listTitle="Popular TV shows this week" type="tv" compact={false} />}
			</main>
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	let homeHero: HomeHeroType.RootObject[] = [];

	axios.get(`${endpoint}trending/movie/day?${key}`).then((response) => {
		response.data.results.slice(0, 2).map((item: HomeHeroType.RootObject) => {
			homeHero.push({
				poster_path: item.poster_path,
				title: item.title,
				overview: item.overview,
				id: item.id,
				backdrop_path: item.backdrop_path,
				type: "movie",
				hero_title: "Trending Movie",
			} as HomeHeroType.RootObject);
		});
	});

	axios.get(`${endpoint}trending/tv/day?${key}`).then((response) => {
		response.data.results.slice(0, 2).map((item: HomeHeroType.RootObject) => {
			homeHero.push({
				poster_path: item.poster_path,
				name: item.name,
				overview: item.overview,
				id: item.id,
				backdrop_path: item.backdrop_path,
				type: "tv",
				hero_title: "Trending TV",
			} as HomeHeroType.RootObject);
		});
	});

	const moviesPopular = await axios.get(`${endpoint}movie/popular?${key}&language=en-US&page=1`).then((response) => {
		return response.data.results.map((item: Movies.Result) => {
			return {
				id: item.id,
				title: item.title,
				poster_path: item.poster_path,
			};
		});
	});

	const tvPopular = await axios.get(`${endpoint}tv/popular?${key}&language=en-US&page=1`).then((response) => {
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
			homeHero,
			moviesPopular,
			tvPopular,
		},
	};
};
