import type { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { Credits } from "../../models/credits";
import type { Tv } from "../../models/tv";
import type { ExternalIds } from "../../models/external_ids";

// dynamic components
const LoadingSpinner = dynamic(() => import("../../components/LoadingSpinner"));
const Hero = dynamic(() => import("../../components/Hero"));
const Cast = dynamic(() => import("../../components/Cast"));

const defaultEndpoint = process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT;

interface TvPageProps {
	movie: Tv.RootObject;
	movieCredits: Credits.RootObject;
	movieExternalIds: ExternalIds.RootObject;
}

const Tv = (props: TvPageProps) => {
	const { movie, movieCredits, movieExternalIds } = props;

	return movie !== null && movieExternalIds !== null && movieCredits !== null ? (
		<>
			<Head>
				<title>{movie.name}</title>
			</Head>
			<Hero movie={movie} externalIds={movieExternalIds} type="tv" />
			<Cast credits={movieCredits} />
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

	const movieCredits = await fetch(`${defaultEndpoint}3/tv/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieCreditsData = await movieCredits.json();

	const movieExternalIds = await fetch(`${defaultEndpoint}3/tv/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieExternalIdsData = await movieExternalIds.json();

	return {
		props: {
			movie: movieData,
			movieCredits: movieCreditsData,
			movieExternalIds: movieExternalIdsData,
		},
	};
};
