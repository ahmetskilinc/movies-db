import type { GetServerSideProps } from "next";
import type { TvPageProps } from "../../models/props";
import dynamic from "next/dynamic";
import Head from "next/head";

import axios from "axios";
import { key, endpoint } from "../../lib/api_lib";
// dynamic components
const Hero = dynamic(() => import("../../components/Hero"));
const Cast = dynamic(() => import("../../components/Cast"));
const Reviews = dynamic(() => import("../../components/Reviews"));
const MoviesList = dynamic(() => import("../../components/MoviesList"));

const Tv = (props: TvPageProps) => {
	const { movie, movieCredits, movieExternalIds, movieRecommendations, movieReviews } = props;

	return (
		<>
			<Head>
				{/* Other Meta */}
				<title>{movie.name} | Movies | MovieDB</title>
				<meta
					name="keywords"
					content={`${movie.name}, Movies, TV Shows, Popular Movies, Movie, Tv Show, Series, MovieDB, Ahmet, Kilinc, Ahmet Kilinc, AhmetK`}
				/>
				<meta name="description" content={movie.overview} />

				{/* OG Tags */}
				<meta property="og:url" content="https://movies.ahmetk.dev" />
				<meta property="og:title" content={`${movie.name} | MovieDB`} />
				<meta property="og:description" content={movie.overview} />
				<meta property="og:image" content={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
				<meta property="og:type" content="article" />

				{/* Twitter Tags */}
				<meta property="twitter:url" content="https://movies.ahmetk.dev" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content={`${movie.name} | MovieDB`} />
				<meta property="twitter:description" content={movie.overview} />
				<meta property="twitter:image" content={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
			</Head>
			{movie !== null && <Hero movie={movie} externalIds={movieExternalIds} type="movie" />}
			{movieCredits !== null && <Cast credits={movieCredits} />}
			{movieReviews !== null && <Reviews reviews={movieReviews} />}
			{movieRecommendations !== null && <MoviesList listTitle="Similar Movies" movies={movieRecommendations.results} type="movie" compact={true} />}
		</>
	);
};

export default Tv;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
	const movie = await axios({
		method: "get",
		url: `${endpoint}tv/${id}?${key}`,
	}).then((response) => {
		return response.data;
	});

	const movieCredits = await axios({
		method: "get",
		url: `${endpoint}tv/${id}/credits?${key}`,
	}).then((response) => {
		return response.data;
	});

	const movieRecommendations = await axios({
		method: "get",
		url: `${endpoint}tv/${id}/recommendations?${key}`,
	}).then((response) => {
		return response.data;
	});

	const movieExternalIds = await axios({
		method: "get",
		url: `${endpoint}tv/${id}/external_ids?${key}`,
	}).then((response) => {
		return response.data;
	});

	const movieReviews = await axios({
		method: "get",
		url: `${endpoint}tv/${id}/reviews?${key}`,
	}).then((response) => {
		return response.data;
	});

	return {
		props: {
			movie,
			movieCredits,
			movieRecommendations,
			movieExternalIds,
			movieReviews,
		},
	};
};
