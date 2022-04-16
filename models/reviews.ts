export declare module Reviews {
	interface AuthorDetails {
		name: string;
		username: string;
		avatar_path: string;
		rating?: number;
	}

	interface Result {
		author: string;
		author_details: AuthorDetails;
		content: string;
		created_at: Date;
		id: string;
		updated_at: Date;
		url: string;
	}

	interface RootObject {
		id: number;
		page: number;
		results: Result[];
		total_pages: number;
		total_results: number;
	}
}
