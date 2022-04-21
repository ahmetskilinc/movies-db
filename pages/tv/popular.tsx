// types
import type { TvPopular } from "../../models/tv_popular";
// components
import { GetServerSideProps } from "next";
import Head from "next/head";
import MoviesList from "../../components/MoviesList";

interface PopularMoviesProps {
	popularTv1: TvPopular.Result[];
	popularTv2: TvPopular.Result[];
	popularTv3: TvPopular.Result[];
	popularTv4: TvPopular.Result[];
}

const TvPopular = (props: PopularMoviesProps) => {
	const { popularTv1, popularTv2, popularTv3, popularTv4 } = props;
	return (
		<>
			<Head>
				<title>Popular TV Shows | MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{popularTv1 !== null && <MoviesList movies={popularTv1} listTitle="Popular TV shows this week" type="tv" compact={false} />}
				<div className="divider"></div>
				{popularTv2 !== null && <MoviesList movies={popularTv2} type="tv" compact={false} />}
				<div className="divider"></div>
				{popularTv3 !== null && <MoviesList movies={popularTv3} type="tv" compact={false} />}
				<div className="divider"></div>
				{popularTv4 !== null && <MoviesList movies={popularTv4} type="tv" compact={false} />}
			</main>
		</>
	);
};

export default TvPopular;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { popularTv1, popularTv2, popularTv3, popularTv4 } = await (await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_API}popular_tv`)).json();

	return {
		props: {
			popularTv1,
			popularTv2,
			popularTv3,
			popularTv4,
		},
	};
};
