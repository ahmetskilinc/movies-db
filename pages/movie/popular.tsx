// types
import type { Movies } from "../../models/movie_popular";
// components
import { GetServerSideProps } from "next";
import Head from "next/head";
import MoviesList from "../../components/MoviesList";

interface PopularMoviesProps {
	popularMovies1: Movies.Result[];
	popularMovies2: Movies.Result[];
	popularMovies3: Movies.Result[];
	popularMovies4: Movies.Result[];
}

const MoviePopular = (props: PopularMoviesProps) => {
	const { popularMovies1, popularMovies2, popularMovies3, popularMovies4 } = props;
	return (
		<>
			<Head>
				<title>Popular Movies | MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{popularMovies1 !== null && <MoviesList movies={popularMovies1} listTitle="Popular movies this week" type="movie" compact={false} />}
				<div className="divider"></div>
				{popularMovies2 !== null && <MoviesList movies={popularMovies2} type="movie" compact={false} />}
				<div className="divider"></div>
				{popularMovies3 !== null && <MoviesList movies={popularMovies3} type="movie" compact={false} />}
				<div className="divider"></div>
				{popularMovies4 !== null && <MoviesList movies={popularMovies4} type="movie" compact={false} />}
			</main>
		</>
	);
};

export default MoviePopular;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { popularMovies1, popularMovies2, popularMovies3, popularMovies4 } = await (
		await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_API}popular_movies`)
	).json();

	return {
		props: {
			popularMovies1,
			popularMovies2,
			popularMovies3,
			popularMovies4,
		},
	};
};
