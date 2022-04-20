import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { key, endpoint } from "../../../lib/api_lib";

const PopularTvApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const popularTv1 = await axios({
		method: "get",
		url: `${endpoint}tv/popular?api_key=${key}&language=en-US&page=1`,
	}).then((response) => {
		return response.data.results;
	});

	const popularTv2 = await axios({
		method: "get",
		url: `${endpoint}tv/popular?api_key=${key}&language=en-US&page=2`,
	}).then((response) => {
		return response.data.results;
	});

	const popularTv3 = await axios({
		method: "get",
		url: `${endpoint}tv/popular?api_key=${key}&language=en-US&page=3`,
	}).then((response) => {
		return response.data.results;
	});

	const popularTv4 = await axios({
		method: "get",
		url: `${endpoint}tv/popular?api_key=${key}&language=en-US&page=4`,
	}).then((response) => {
		return response.data.results;
	});

	return res.status(200).json({
		popularTv1,
		popularTv2,
		popularTv3,
		popularTv4,
	});
};

export default PopularTvApi;
