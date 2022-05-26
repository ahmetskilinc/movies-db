import type { MovieWatchProviderListProps } from "../models/props";

const WatchProviderList = (props: MovieWatchProviderListProps) => {
	const { provider, title } = props;
	return (
		<>
			{provider?.length > 0 ? <h3 className="text-xl font-semibold">{title}</h3> : null}
			<div className="flex flex-column flex-wrap space-x-3">
				{provider?.map((provider) => (
					<div key={provider.provider_id}>
						<img src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} className="rounded-2xl h-14 w-14" alt={provider.provider_name} />
					</div>
				))}
			</div>
		</>
	);
};

export default WatchProviderList;
