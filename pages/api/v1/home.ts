import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { Movies } from "../../../models/movie_popular";
import type { TvPopular } from "../../../models/tv_popular";
import { key, endpoint } from "../../../lib/api_lib";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const trendingMoviesTodayAxios = await axios({
		method: "get",
		url: `${endpoint}trending/movie/day?api_key=${key}`,
	}).then((response) => {
		const data = response.data;
		return [
			{
				poster_path: data.results[0].poster_path,
				title: data.results[0].title,
				overview: data.results[0].overview,
				id: data.results[0].id,
				backdrop_path: data.results[0].backdrop_path,
				type: "movie",
				hero_title: "Trending Movie",
			},
			{
				poster_path: data.results[1].poster_path,
				title: data.results[1].title,
				overview: data.results[1].overview,
				id: data.results[1].id,
				backdrop_path: data.results[1].backdrop_path,
				type: "movie",
				hero_title: "Trending Movie",
			},
		];
	});

	const trendingTvTodayAxios = await axios({
		method: "get",
		url: `${endpoint}trending/tv/day?api_key=${key}`,
	}).then((response) => {
		const data = response.data;
		return [
			{
				poster_path: data.results[0].poster_path,
				title: data.results[0].title,
				overview: data.results[0].overview,
				id: data.results[0].id,
				backdrop_path: data.results[0].backdrop_path,
				type: "movie",
				hero_title: "Trending Movie",
			},
			{
				poster_path: data.results[1].poster_path,
				title: data.results[1].title,
				overview: data.results[1].overview,
				id: data.results[1].id,
				backdrop_path: data.results[1].backdrop_path,
				type: "movie",
				hero_title: "Trending Movie",
			},
		];
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

	const homeHero = [...trendingMoviesTodayAxios, ...trendingTvTodayAxios];

	return res.status(200).json({
		homeHero,
		moviesPopular,
		tvPopular,
	});
};
