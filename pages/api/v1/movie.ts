import type { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

const endpoint = process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT;
const key = process.env.NEXT_PUBLIC_TMDB_KEY;

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;
	const movie = await fetch(`${endpoint}movie/${id}?api_key=${key}`);
	const movieData = await movie.json();

	const movieCredits = await fetch(`${endpoint}movie/${id}/credits?api_key=${key}`);
	const movieCreditsData = await movieCredits.json();

	const movieRecommendations = await fetch(`${endpoint}movie/${id}/recommendations?api_key=${key}`);
	const movieRecommendationsData = await movieRecommendations.json();

	const movieExternalIds = await fetch(`${endpoint}movie/${id}/external_ids?api_key=${key}`);
	const movieExternalIdsData = await movieExternalIds.json();

	const movieReviews = await fetch(`${endpoint}movie/${id}/reviews?api_key=${key}`);
	const movieReviewsData = await movieReviews.json();

	const movieWatchProviders = await fetch(`${endpoint}movie/${id}/watch/providers?api_key=${key}`);
	const movieWatchProvidersData = await movieWatchProviders.json();

	return res.status(200).json({
		movie: movieData,
		movieCredits: movieCreditsData,
		movieRecommendations: movieRecommendationsData,
		movieExternalIds: movieExternalIdsData,
		movieReviews: movieReviewsData,
		movieWatchProviders: movieWatchProvidersData,
	});
};
