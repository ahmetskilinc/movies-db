import axios from "axios";
import { key, endpoint } from "../../../lib/api_lib";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Movies } from "../../../models/movie_popular";
import type { TvPopular } from "../../../models/tv_popular";
import type { HomeHeroType } from "../../../models/home_hero";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	let homeHero: HomeHeroType.RootObject[] = [];
	axios({
		method: "get",
		url: `${endpoint}trending/movie/day?api_key=${key}`,
	}).then((response) => {
		response.data.results.slice(0, 2).map((item: HomeHeroType.RootObject) => {
			homeHero.push({
				poster_path: item.poster_path,
				title: item.title,
				overview: item.overview,
				id: item.id,
				backdrop_path: item.backdrop_path,
				type: "movie",
				hero_title: "Trending Movie",
			} as HomeHeroType.RootObject);
		});
	});

	axios({
		method: "get",
		url: `${endpoint}trending/tv/day?api_key=${key}`,
	}).then((response) => {
		response.data.results.slice(0, 2).map((item: HomeHeroType.RootObject) => {
			homeHero.push({
				poster_path: item.poster_path,
				title: item.title,
				overview: item.overview,
				id: item.id,
				backdrop_path: item.backdrop_path,
				type: "tv",
				hero_title: "Trending TV",
			} as HomeHeroType.RootObject);
		});
	});

	const moviesPopular = await axios({
		method: "get",
		url: `${endpoint}movie/popular?api_key=${key}&language=en-US&page=1`,
	}).then((response) => {
		return response.data.results.map((item: Movies.Result) => {
			return {
				id: item.id,
				title: item.title,
				poster_path: item.poster_path,
			};
		});
	});

	const tvPopular = await axios({
		method: "get",
		url: `${endpoint}tv/popular?api_key=${key}&language=en-US&page=1`,
	}).then((response) => {
		return response.data.results.map((item: TvPopular.Result) => {
			return {
				id: item.id,
				name: item.name,
				poster_path: item.poster_path,
			};
		});
	});

	return res.status(200).json({
		homeHero,
		moviesPopular,
		tvPopular,
	});
};
