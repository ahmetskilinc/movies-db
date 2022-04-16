export declare module TvPopular {
	export interface Result {
		poster_path: string;
		popularity: number;
		id: number;
		backdrop_path: string;
		vote_average: number;
		overview: string;
		first_air_date: string;
		origin_country: string[];
		genre_ids: number[];
		original_language: string;
		vote_count: number;
		name: string;
		title: string;
		original_name: string;
	}

	export interface RootObject {
		page: number;
		results: Result[];
		total_results: number;
		total_pages: number;
	}
}
