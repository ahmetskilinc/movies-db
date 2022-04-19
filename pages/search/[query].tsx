// types
import type { GetServerSideProps } from "next";
import type { Movies } from "../../models/movie_popular";
import type { TvPopular } from "../../models/tv_popular";
// components
import dynamic from "next/dynamic";
import Head from "next/head";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useRouter } from "next/router";

// dynamic components
const MoviesList = dynamic(() => import("../../components/MoviesList"));

const defaultEndpoint = process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT;

interface HomeProps {
	moviesSearch: Movies.Result[];
	tvSearch: TvPopular.Result[];
}

const Home = (props: HomeProps) => {
	const { moviesSearch, tvSearch } = props;
	const router = useRouter();
	const { query } = router.query;

	return (
		<>
			<Head>
				<title>MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{moviesSearch !== null && tvSearch !== null ? (
					<>
						<MoviesList movies={moviesSearch} listTitle={`${query} in Movies`} type="movie" compact={false} />
						<div className="divider"></div>
						<MoviesList movies={tvSearch} listTitle={`${query} in Tv`} type="tv" compact={false} />
					</>
				) : (
					<LoadingSpinner />
				)}
			</main>
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { query } = context.query;
	const responseMovies = await fetch(
		`${defaultEndpoint}search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1&query=${encodeURI(
			query as string
		)}&include_adult=true`
	);
	const dataMovies = await responseMovies.json();

	const responseTv = await fetch(
		`${defaultEndpoint}search/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1&query=${encodeURI(query as string)}&include_adult=true`
	);
	const dataTv = await responseTv.json();

	return {
		props: {
			moviesSearch: dataMovies.results,
			tvSearch: dataTv.results,
		},
	};
};
