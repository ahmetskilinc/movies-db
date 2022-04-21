import axios from "axios";
import { key, endpoint } from "../../../lib/api_lib";
import type { NextApiRequest, NextApiResponse } from "next";

const HomeApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const providers = await axios({
		method: "get",
		url: `${endpoint}watch/providers/regions?api_key=${key}`,
	}).then((response) => {
		return response.data.results;
	});

	return res.status(200).json({
		providers,
	});
};

export default HomeApi;
