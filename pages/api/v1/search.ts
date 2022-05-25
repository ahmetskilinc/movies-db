import axios from "axios";
import { key, endpoint } from "../../../lib/api_lib";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Movies } from "../../../models/movie_popular";
import type { TvPopular } from "../../../models/tv_popular";

const SearchApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const { q } = req.query;
	const moviesSearch = await axios({
		method: "get",
		url: `${endpoint}search/movie?${key}&page=1&query=${encodeURI(q as string)}&include_adult=true`,
	}).then((response) => {
		return response.data.results.map((item: Movies.Result) => {
			return {
				id: item.id,
				title: item.title,
				poster_path: item.poster_path,
			};
		});
	});

	const tvSearch = await axios({
		method: "get",
		url: `${endpoint}search/tv?${key}&page=1&query=${encodeURI(q as string)}&include_adult=true`,
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
		moviesSearch,
		tvSearch,
	});
};

export default SearchApi;
