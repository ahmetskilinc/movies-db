import type { GetServerSideProps } from "next";
import type { Credits } from "../../models/credits";
import type { Tv } from "../../models/tv";
import type { ExternalIds } from "../../models/external_ids";
import type { Reviews } from "../../models/reviews";
import dynamic from "next/dynamic";
import Head from "next/head";
import { TvPopular } from "../../models/tv_popular";

// dynamic components
const LoadingSpinner = dynamic(() => import("../../components/LoadingSpinner"));
const Hero = dynamic(() => import("../../components/Hero"));
const Cast = dynamic(() => import("../../components/Cast"));
const Reviews = dynamic(() => import("../../components/Reviews"));
const MoviesList = dynamic(() => import("../../components/MoviesList"));

const defaultEndpoint = process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT;

interface TvPageProps {
	movie: Tv.RootObject;
	movieCredits: Credits.RootObject;
	movieExternalIds: ExternalIds.RootObject;
	movieRecommendations: TvPopular.RootObject;
	movieReviews: Reviews.RootObject;
}

const Tv = (props: TvPageProps) => {
	const { movie, movieCredits, movieExternalIds, movieRecommendations, movieReviews } = props;

	return movie !== null && movieExternalIds !== null && movieCredits !== null && movieRecommendations !== null ? (
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
			<Hero movie={movie} externalIds={movieExternalIds} type="tv" />
			<Cast credits={movieCredits} />
			<Reviews reviews={movieReviews} />
			<MoviesList listTitle="Similar TV Shows" movies={movieRecommendations.results} type="tv" compact={true} />
		</>
	) : (
		<LoadingSpinner />
	);
};

export default Tv;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
	const movie = await fetch(`${defaultEndpoint}tv/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieData = await movie.json();

	const movieRecommendations = await fetch(`${defaultEndpoint}tv/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieRecommendationsData = await movieRecommendations.json();

	const movieCredits = await fetch(`${defaultEndpoint}tv/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieCreditsData = await movieCredits.json();

	const movieExternalIds = await fetch(`${defaultEndpoint}tv/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieExternalIdsData = await movieExternalIds.json();

	const movieReviews = await fetch(`${defaultEndpoint}tv/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieReviewsData = await movieReviews.json();

	return {
		props: {
			movie: movieData,
			movieCredits: movieCreditsData,
			movieRecommendations: movieRecommendationsData,
			movieExternalIds: movieExternalIdsData,
			movieReviews: movieReviewsData,
		},
	};
};
