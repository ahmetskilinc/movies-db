import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { key, endpoint } from "../../../lib/api_lib";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	const movieData = await axios({
		method: "get",
		url: `${endpoint}movie/${id}?api_key=${key}`,
	}).then((response) => {
		return response.data;
	});

	const movieCreditsData = await axios({
		method: "get",
		url: `${endpoint}movie/${id}/credits?api_key=${key}`,
	}).then((response) => {
		return response.data;
	});

	const movieRecommendationsData = await axios({
		method: "get",
		url: `${endpoint}movie/${id}/recommendations?api_key=${key}`,
	}).then((response) => {
		return response.data;
	});

	const movieExternalIdsData = await axios({
		method: "get",
		url: `${endpoint}movie/${id}/external_ids?api_key=${key}`,
	}).then((response) => {
		return response.data;
	});

	const movieReviewsData = await axios({
		method: "get",
		url: `${endpoint}movie/${id}/reviews?api_key=${key}`,
	}).then((response) => {
		return response.data;
	});

	const movieWatchProvidersData = await axios({
		method: "get",
		url: `${endpoint}movie/${id}/watch/providers?api_key=${key}`,
	}).then((response) => {
		return response.data;
	});

	return res.status(200).json({
		movie: movieData,
		movieCredits: movieCreditsData,
		movieRecommendations: movieRecommendationsData,
		movieExternalIds: movieExternalIdsData,
		movieReviews: movieReviewsData,
		movieWatchProviders: movieWatchProvidersData,
	});
};
