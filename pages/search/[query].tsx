// types
import type { GetServerSideProps } from "next";
import type { Movies } from "../../models/movie_popular";
import type { TvPopular } from "../../models/tv_popular";
// components
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";

// dynamic components
const MoviesList = dynamic(() => import("../../components/MoviesList"));

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
				<title>Search {query} | MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="pt-5">
				<form
					className="flex items-center w-full justify-center search-form"
					action=""
					onSubmit={(e) => {
						e.preventDefault();
						const target = document.getElementById("search") as HTMLInputElement;
						const searchQuery = target.value;

						router.push(`/search/${searchQuery}`);
					}}
				>
					<input type="search" placeholder="Search..." className="input input-primary input-lg w-full max-w-lg" id="search" />
					<button className="btn btn-primary btn-lg btn-square">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
				</form>
				{moviesSearch !== null && <MoviesList movies={moviesSearch} listTitle={`${query} in Movies`} type="movie" compact={false} />}
				<div className="divider"></div>
				{tvSearch !== null && <MoviesList movies={tvSearch} listTitle={`${query} in TV`} type="tv" compact={false} />}
			</main>
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { query } = context.query;
	const { moviesSearch, tvSearch } = await (await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_API}search?q=${query}`)).json();
	return {
		props: {
			moviesSearch,
			tvSearch,
		},
	};
};
