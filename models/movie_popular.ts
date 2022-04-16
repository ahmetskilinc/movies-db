export declare module Movies {
	interface Result {
		poster_path: string;
		adult: boolean;
		overview: string;
		release_date: string;
		genre_ids: number[];
		id: number;
		original_title: string;
		original_language: string;
		title: string;
		backdrop_path: string;
		popularity: number;
		vote_count: number;
		video: boolean;
		name: string;
		vote_average: number;
	}

	interface RootObject {
		page: number;
		results: Result[];
		total_results: number;
		total_pages: number;
	}
}
