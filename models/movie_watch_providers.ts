export declare module MovieWatchProviders {
	interface Result {
		iso_3166_1: string;
		english_name: string;
		native_name: string;
	}

	interface Provider {
		display_priority: number;
		logo_path: string;
		provider_id: number;
		provider_name: string;
	}

	interface ProviderObject {
		flatrate: Provider[];
		rent: Provider[];
		buy: Provider[];
	}

	interface RootObject {
		results: Result[];
	}
}
