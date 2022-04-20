import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

const endpoint = process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT;
const key = process.env.NEXT_PUBLIC_TMDB_KEY;

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const responseHomeHeroMovie = await fetch(`${endpoint}trending/movie/day?api_key=${key}`);
	const dataHomeHeroMovie = await responseHomeHeroMovie.json();

	const responseHomeHeroTv = await fetch(`${endpoint}trending/tv/day?api_key=${key}`);
	const dataHomeHeroTv = await responseHomeHeroTv.json();

	const trendingToday = [
		{ obj: dataHomeHeroMovie.results[0], type: "movie", title: "Trending Movie" },
		{ obj: dataHomeHeroMovie.results[1], type: "movie", title: "Trending Movie" },
		{ obj: dataHomeHeroTv.results[0], type: "tv", title: "Trending TV Show" },
		{ obj: dataHomeHeroTv.results[1], type: "tv", title: "Trending TV Show" },
	];

	const responseMovies = await fetch(`${endpoint}movie/popular?api_key=${key}&language=en-US&page=1`);
	const dataMovies = await responseMovies.json();

	const responseTv = await fetch(`${endpoint}tv/popular?api_key=${key}&language=en-US&page=1`);
	const dataTv = await responseTv.json();

	return res.status(200).json({
		homeHero: trendingToday,
		moviesPopular: dataMovies.results,
		tvPopular: dataTv.results,
	});
};
