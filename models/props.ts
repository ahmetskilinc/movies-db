import type { Credits } from "./credits";
import type { Movies } from "./movie_popular";
import type { Movie } from "./movie";
import type { ExternalIds } from "./external_ids";
import type { Reviews } from "./reviews";
import type { MovieWatchProviders } from "./movie_watch_providers";
import type { TvPopular } from "./tv_popular";
import type { Tv } from "./tv";
import type { HomeHeroType } from "./home_hero";
import React from "react";

export type HomeProps = {
	homeHero: HomeHeroType.RootObject[];
	moviesPopular: Movies.Result[];
	tvPopular: TvPopular.Result[];
};

export type MoviePageProps = {
	movie: Movie.RootObject;
	movieCredits: Credits.RootObject;
	movieRecommendations: Movies.RootObject;
	movieExternalIds: ExternalIds.RootObject;
	movieReviews: Reviews.RootObject;
	movieWatchProviders: MovieWatchProviders.RootObject;
	providers: MovieWatchProviders.Result[];
};

export type PopularMoviesProps = {
	popularMovies1: Movies.Result[];
	popularMovies2: Movies.Result[];
	popularMovies3: Movies.Result[];
	popularMovies4: Movies.Result[];
};

export type PopularTvProps = {
	popularTv1: TvPopular.Result[];
	popularTv2: TvPopular.Result[];
	popularTv3: TvPopular.Result[];
	popularTv4: TvPopular.Result[];
};

export type SearchProps = {
	moviesSearch: Movies.Result[];
	tvSearch: TvPopular.Result[];
};

export type TvPageProps = {
	movie: Tv.RootObject;
	movieCredits: Credits.RootObject;
	movieExternalIds: ExternalIds.RootObject;
	movieRecommendations: TvPopular.RootObject;
	movieReviews: Reviews.RootObject;
};

export type CastProps = {
	credits: Credits.RootObject;
};

export type HeroProps = {
	movie: Movie.RootObject | Tv.RootObject;
	externalIds: ExternalIds.RootObject;
	type: string;
};

export type HomeHeroProps = {
	movies: HomeHeroType.RootObject[];
};

export type MovieCardProps = {
	movie: Movies.Result | TvPopular.Result;
	type: string;
};

export type MovieListProps = {
	movies: Movies.Result[] | TvPopular.Result[];
	listTitle?: string;
	type: string;
	compact: boolean;
};

export type RevBudgetProps = {
	budget: number;
	revenue: number;
};

export type ReviewsProps = {
	reviews: Reviews.RootObject;
};

export type WatchProvidersProps = {
	providers: MovieWatchProviders.Result[];
	movieWatchProviders: any;
};

export type CollapseProps = {
	title?: string;
	header?: React.ReactNode;
	children: React.ReactNode;
};

export type ReviewsHeaderProps = {
	results: Reviews.Result[];
};

export type MovieWatchProviderListProps = {
	provider: MovieWatchProviders.Provider[];
	title: string;
};
