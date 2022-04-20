import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { key, endpoint } from "../../../lib/api_lib";
import { Movies } from "../../../models/movie_popular";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const popularMovies1 = await axios({
		method: "get",
		url: `${endpoint}movie/popular?api_key=${key}&language=en-US&page=1`,
	}).then((response) => {
		return response.data.results;
	});

	const popularMovies2 = await axios({
		method: "get",
		url: `${endpoint}movie/popular?api_key=${key}&language=en-US&page=2`,
	}).then((response) => {
		return response.data.results;
	});

	const popularMovies3 = await axios({
		method: "get",
		url: `${endpoint}movie/popular?api_key=${key}&language=en-US&page=3`,
	}).then((response) => {
		return response.data.results;
	});

	const popularMovies4 = await axios({
		method: "get",
		url: `${endpoint}movie/popular?api_key=${key}&language=en-US&page=4`,
	}).then((response) => {
		return response.data.results;
	});

	return res.status(200).json({
		popularMovies1,
		popularMovies2,
		popularMovies3,
		popularMovies4,
	});
};
