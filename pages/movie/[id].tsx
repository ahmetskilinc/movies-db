import type { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { Credits } from "../../models/credits";
import type { Movie } from "../../models/movie";
import type { ExternalIds } from "../../models/external_ids";

// dynamic components
const LoadingSpinner = dynamic(() => import("../../components/LoadingSpinner"));
const Hero = dynamic(() => import("../../components/Hero"));
const Cast = dynamic(() => import("../../components/Cast"));

interface MoviePageProps {
	movie: Movie.RootObject;
	movieCredits: Credits.RootObject;
	movieExternalIds: ExternalIds.RootObject;
}

const Movie = (props: MoviePageProps) => {
	const { movie, movieCredits, movieExternalIds } = props;

	return movie !== null && movieExternalIds !== null && movieCredits !== null ? (
		<>
			<Head>
				<title>{movie.title}</title>
			</Head>
			<Hero movie={movie} externalIds={movieExternalIds} type="movie" />
			<Cast credits={movieCredits} />
		</>
	) : (
		<LoadingSpinner />
	);
};

export default Movie;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
	const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieData = await movie.json();

	const movieCredits = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieCreditsData = await movieCredits.json();

	const movieExternalIds = await fetch(`https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieExternalIdsData = await movieExternalIds.json();

	return {
		props: {
			movie: movieData,
			movieCredits: movieCreditsData,
			movieExternalIds: movieExternalIdsData,
		},
	};
};
