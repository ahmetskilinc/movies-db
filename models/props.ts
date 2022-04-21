import type { Credits } from "./credits";
import type { Movies } from "./movie_popular";
import type { Movie } from "./movie";
import type { ExternalIds } from "./external_ids";
import type { Reviews } from "./reviews";
import type { MovieWatchProviders } from "./movie_watch_providers";
import type { TvPopular } from "./tv_popular";
import type { Tv } from "./tv";
import type { HomeHeroType } from "./home_hero";

export interface HomeProps {
	homeHero: HomeHeroType.RootObject[];
	moviesPopular: Movies.Result[];
	tvPopular: TvPopular.Result[];
}

export interface MoviePageProps {
	movie: Movie.RootObject;
	movieCredits: Credits.RootObject;
	movieRecommendations: Movies.RootObject;
	movieExternalIds: ExternalIds.RootObject;
	movieReviews: Reviews.RootObject;
	movieWatchProviders: MovieWatchProviders.RootObject;
}

export interface PopularMoviesProps {
	popularMovies1: Movies.Result[];
	popularMovies2: Movies.Result[];
	popularMovies3: Movies.Result[];
	popularMovies4: Movies.Result[];
}

export interface PopularMoviesProps {
	popularTv1: TvPopular.Result[];
	popularTv2: TvPopular.Result[];
	popularTv3: TvPopular.Result[];
	popularTv4: TvPopular.Result[];
}

export interface SearchProps {
	moviesSearch: Movies.Result[];
	tvSearch: TvPopular.Result[];
}

export interface TvPageProps {
	movie: Tv.RootObject;
	movieCredits: Credits.RootObject;
	movieExternalIds: ExternalIds.RootObject;
	movieRecommendations: TvPopular.RootObject;
	movieReviews: Reviews.RootObject;
}

export interface CastProps {
	credits: Credits.RootObject;
}

export interface HeroProps {
	movie: Movie.RootObject | Tv.RootObject;
	externalIds: ExternalIds.RootObject;
	type: string;
}

export interface HomeHeroProps {
	movies: HomeHeroType.RootObject[];
}

export interface MovieCardProps {
	movie: Movies.Result | TvPopular.Result;
	type: string;
}

export interface MovieListProps {
	movies: Movies.Result[] | TvPopular.Result[];
	listTitle?: string;
	type: string;
	compact: boolean;
}

export interface RevBudgetProps {
	budget: number;
	revenue: number;
}

export interface ReviewsProps {
	reviews: Reviews.RootObject;
}
