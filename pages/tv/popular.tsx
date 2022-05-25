// types
import type { PopularTvProps } from "../../models/props";

import axios from "axios";
import { key, endpoint } from "../../lib/api_lib";
// components
import { GetServerSideProps } from "next";
import Head from "next/head";
import MoviesList from "../../components/MoviesList";

const TvPopular = (props: PopularTvProps) => {
	const { popularTv1, popularTv2, popularTv3, popularTv4 } = props;
	return (
		<>
			<Head>
				<title>Popular TV Shows | MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{popularTv1 !== null && <MoviesList movies={popularTv1} listTitle="Popular TV shows this week" type="tv" compact={false} />}
				<div className="divider"></div>
				{popularTv2 !== null && <MoviesList movies={popularTv2} type="tv" compact={false} />}
				<div className="divider"></div>
				{popularTv3 !== null && <MoviesList movies={popularTv3} type="tv" compact={false} />}
				<div className="divider"></div>
				{popularTv4 !== null && <MoviesList movies={popularTv4} type="tv" compact={false} />}
			</main>
		</>
	);
};

export default TvPopular;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const popularTv1 = await axios({
		method: "get",
		url: `${endpoint}tv/popular?${key}&language=en-US&page=1`,
	}).then((response) => {
		return response.data.results;
	});

	const popularTv2 = await axios({
		method: "get",
		url: `${endpoint}tv/popular?${key}&language=en-US&page=2`,
	}).then((response) => {
		return response.data.results;
	});

	const popularTv3 = await axios({
		method: "get",
		url: `${endpoint}tv/popular?${key}&language=en-US&page=3`,
	}).then((response) => {
		return response.data.results;
	});

	const popularTv4 = await axios({
		method: "get",
		url: `${endpoint}tv/popular?${key}&language=en-US&page=4`,
	}).then((response) => {
		return response.data.results;
	});

	return {
		props: {
			popularTv1,
			popularTv2,
			popularTv3,
			popularTv4,
		},
	};
};
