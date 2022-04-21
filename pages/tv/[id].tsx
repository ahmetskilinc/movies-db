import type { GetServerSideProps } from "next";
import type { TvPageProps } from "../../models/props";
import dynamic from "next/dynamic";
import Head from "next/head";

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
	const { movie, movieCredits, movieRecommendations, movieExternalIds, movieReviews, movieWatchProviders } = await (
		await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_API}tv?id=${id}`)
	).json();
	return {
		props: {
			movie: movie,
			movieCredits: movieCredits,
			movieRecommendations: movieRecommendations,
			movieExternalIds: movieExternalIds,
			movieReviews: movieReviews,
		},
	};
};
