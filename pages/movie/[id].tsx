import type { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { Credits } from "../../models/credits";
import type { Movie } from "../../models/movie";
import type { Movies } from "../../models/movie_popular";
import type { ExternalIds } from "../../models/external_ids";
import MoviesList from "../../components/MoviesList";

// dynamic components
const LoadingSpinner = dynamic(() => import("../../components/LoadingSpinner"));
const Hero = dynamic(() => import("../../components/Hero"));
const Cast = dynamic(() => import("../../components/Cast"));
const RevenueBudgetView = dynamic(() => import("../../components/RevBudgetView"));

const defaultEndpoint = process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT;

interface MoviePageProps {
	movie: Movie.RootObject;
	movieCredits: Credits.RootObject;
	movieRecommendations: Movies.RootObject;
	movieExternalIds: ExternalIds.RootObject;
}

const Movie = (props: MoviePageProps) => {
	const { movie, movieCredits, movieExternalIds, movieRecommendations } = props;

	return movie !== null && movieExternalIds !== null && movieCredits !== null && movieRecommendations !== null ? (
		<>
			<Head>
				<title>{movie.title}</title>
			</Head>
			<Hero movie={movie} externalIds={movieExternalIds} type="movie" />
			<Cast credits={movieCredits} />
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

	const movieRecommendations = await fetch(`${defaultEndpoint}3/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieRecommendationsData = await movieRecommendations.json();

	const movieExternalIds = await fetch(`${defaultEndpoint}3/movie/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieExternalIdsData = await movieExternalIds.json();

	return {
		props: {
			movie: movieData,
			movieCredits: movieCreditsData,
			movieRecommendations: movieRecommendationsData,
			movieExternalIds: movieExternalIdsData,
		},
	};
};
