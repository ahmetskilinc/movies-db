// types
import type { GetServerSideProps } from "next";
import type { HomeProps } from "../models/props";
// components
import dynamic from "next/dynamic";
import Head from "next/head";

// dynamic components
const MoviesList = dynamic(() => import("../components/MoviesList"));
const HomeHero = dynamic(() => import("../components/HomeHero"));

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
				{homeHero !== null && <HomeHero movies={homeHero} />}
				{moviesPopular !== null && <MoviesList movies={moviesPopular} listTitle="Popular movies this week" type="movie" compact={false} />}
				<div className="divider"></div>
				{tvPopular !== null && <MoviesList movies={tvPopular} listTitle="Popular TV shows this week" type="tv" compact={false} />}
			</main>
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const { homeHero, moviesPopular, tvPopular } = await (await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_API}home`)).json();

	return {
		props: {
			homeHero,
			moviesPopular,
			tvPopular,
		},
	};
};
