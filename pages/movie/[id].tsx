import type { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { Credits } from "../../models/credits";
import type { Movie } from "../../models/movie";
import type { Movies } from "../../models/movie_popular";
import type { ExternalIds } from "../../models/external_ids";
import type { Reviews } from "../../models/reviews";
import type { MovieWatchProviders } from "../../models/movie_watch_providers";
import WatchProviders from "../../components/WatchProviders";

// dynamic components
const LoadingSpinner = dynamic(() => import("../../components/LoadingSpinner"));
const Hero = dynamic(() => import("../../components/Hero"));
const Cast = dynamic(() => import("../../components/Cast"));
const RevenueBudgetView = dynamic(() => import("../../components/RevBudgetView"));
const Reviews = dynamic(() => import("../../components/Reviews"));
const MoviesList = dynamic(() => import("../../components/MoviesList"));

const defaultEndpoint = process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT;

interface MoviePageProps {
	movie: Movie.RootObject;
	movieCredits: Credits.RootObject;
	movieRecommendations: Movies.RootObject;
	movieExternalIds: ExternalIds.RootObject;
	movieReviews: Reviews.RootObject;
	movieWatchProviders: MovieWatchProviders.RootObject;
}

const Movie = (props: MoviePageProps) => {
	const { movie, movieCredits, movieExternalIds, movieRecommendations, movieReviews, movieWatchProviders } = props;

	return movie !== null && movieExternalIds !== null && movieCredits !== null && movieRecommendations !== null && movieWatchProviders !== null ? (
		<>
			<Head>
				{/* Other Meta */}
				<title>{movie.title} | Movies | MovieDB</title>
				<meta
					name="keywords"
					content={`${movie.title}, Movies, TV Shows, Popular Movies, Movie, Tv Show, Series, MovieDB, Ahmet, Kilinc, Ahmet Kilinc, AhmetK`}
				/>
				<meta name="description" content={movie.overview} />

				{/* OG Tags */}
				<meta property="og:url" content="https://movies.ahmetk.dev" />
				<meta property="og:title" content={`${movie.title} | MovieDB`} />
				<meta property="og:description" content={movie.overview} />
				<meta property="og:image" content={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
				<meta property="og:type" content="article" />

				{/* Twitter Tags */}
				<meta property="twitter:url" content="https://movies.ahmetk.dev" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content={`${movie.title} | MovieDB`} />
				<meta property="twitter:description" content={movie.overview} />
				<meta property="twitter:image" content={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
			</Head>
			<Hero movie={movie} externalIds={movieExternalIds} type="movie" />
			<Cast credits={movieCredits} />
			<WatchProviders providers={movieWatchProviders.results} />
			<Reviews reviews={movieReviews} />
			<RevenueBudgetView budget={movie.budget} revenue={movie.revenue} />
			<MoviesList listTitle="Similar Movies" movies={movieRecommendations.results} type="movie" compact={true} />
		</>
	) : (
		<LoadingSpinner />
	);
};

export default Movie;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
	const movie = await fetch(`${defaultEndpoint}movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieData = await movie.json();

	const movieCredits = await fetch(`${defaultEndpoint}movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieCreditsData = await movieCredits.json();

	const movieRecommendations = await fetch(`${defaultEndpoint}movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieRecommendationsData = await movieRecommendations.json();

	const movieExternalIds = await fetch(`${defaultEndpoint}movie/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieExternalIdsData = await movieExternalIds.json();

	const movieReviews = await fetch(`${defaultEndpoint}movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieReviewsData = await movieReviews.json();

	const movieWatchProviders = await fetch(`${defaultEndpoint}movie/${id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieWatchProvidersData = await movieWatchProviders.json();

	return {
		props: {
			movie: movieData,
			movieCredits: movieCreditsData,
			movieRecommendations: movieRecommendationsData,
			movieExternalIds: movieExternalIdsData,
			movieReviews: movieReviewsData,
			movieWatchProviders: movieWatchProvidersData,
		},
	};
};
