import { Movies } from "./movie_popular";
import { TvPopular } from "./tv_popular";

export declare module HomeHeroType {
	interface RootObject {
		obj: Movies.Result | TvPopular.Result;
		type: string;
		title: string;
	}
}
