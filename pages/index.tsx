// types
import type { GetServerSideProps } from "next";
import type { HomeHeroType } from "../models/home_hero";
import type { Movies } from "../models/movie_popular";
import type { TvPopular } from "../models/tv_popular";
// components
import dynamic from "next/dynamic";
import Head from "next/head";
import LoadingSpinner from "../components/LoadingSpinner";
// dynamic components
const MoviesList = dynamic(() => import("../components/MoviesList"));
const HomeHero = dynamic(() => import("../components/HomeHero"));

const defaultEndpoint = "https://api.themoviedb.org/3/";

interface HomeProps {
	homeHero: HomeHeroType.RootObject[];
	moviesPopular: Movies.Result[];
	tvPopular: TvPopular.Result[];
}

const Home = (props: HomeProps) => {
	const { homeHero, moviesPopular, tvPopular } = props;

	return (
		<>
			<Head>
				<title>MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{homeHero !== null && moviesPopular !== null && tvPopular !== null ? (
					<>
						<HomeHero movies={homeHero} />
						<MoviesList movies={moviesPopular} listTitle="Popular movies this week" type="movie" />
						<div className="divider"></div>
						<MoviesList movies={tvPopular} listTitle="Popular TV shows this week" type="tv" />
						{/* <div className="divider"></div>
						<MoviesList movies={topRatedMovies} listTitle="Top rated movies" type="movie" />
						<div className="divider"></div>
						<MoviesList movies={topRatedTvShows} listTitle="Top rated TV shows" type="tv" /> */}
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
	const responseHomeHeroMovie = await fetch(`${defaultEndpoint}trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const dataHomeHeroMovie = await responseHomeHeroMovie.json();

	const responseHomeHeroTv = await fetch(`${defaultEndpoint}trending/tv/day?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const dataHomeHeroTv = await responseHomeHeroTv.json();

	const trendingToday = [
		{ obj: dataHomeHeroMovie.results[0], type: "movie", title: "Trending Movie" },
		{ obj: dataHomeHeroMovie.results[1], type: "movie", title: "Trending Movie" },
		{ obj: dataHomeHeroTv.results[0], type: "tv", title: "Trending TV Show" },
		{ obj: dataHomeHeroTv.results[1], type: "tv", title: "Trending TV Show" },
	];

	const responseMovies = await fetch(`${defaultEndpoint}movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`);
	const dataMovies = await responseMovies.json();

	const responseTv = await fetch(`${defaultEndpoint}tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`);
	const dataTv = await responseTv.json();

	return {
		props: {
			homeHero: trendingToday,
			moviesPopular: dataMovies.results,
			tvPopular: dataTv.results,
		},
	};
};
