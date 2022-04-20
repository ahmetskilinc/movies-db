import type { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;
	const movie = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieData = await movie.json();

	const movieCredits = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieCreditsData = await movieCredits.json();

	const movieRecommendations = await fetch(
		`${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
	);
	const movieRecommendationsData = await movieRecommendations.json();

	const movieExternalIds = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}movie/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieExternalIdsData = await movieExternalIds.json();

	const movieReviews = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
	const movieReviewsData = await movieReviews.json();

	const movieWatchProviders = await fetch(
		`${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}movie/${id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
	);
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
