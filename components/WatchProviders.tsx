import { MovieWatchProviders } from "../models/movie_watch_providers";

const WatchProviders = (props: { providers: MovieWatchProviders.Results }) => {
	const { providers } = props;
	// console.log(providers);
	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<div className="collapse rounded-md collapse-arrow" style={{ display: "grid" }}>
				<input type="checkbox" />
				<div className="collapse-title bg-secondary-content text-secondary peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center">
					<h1 className="text-white text-bold text-2xl mr-3">Where to watch</h1>
				</div>
				<div className="collapse-content bg-secondary-content text-secondary peer-checked:bg-secondary peer-checked:text-secondary-content">
					<div className="flex flex-col">providers</div>
				</div>
			</div>
		</div>
	);
};

export default WatchProviders;
