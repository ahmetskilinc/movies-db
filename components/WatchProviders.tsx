import type { WatchProvidersProps } from "../models/props";
import type { MovieWatchProviders } from "../models/movie_watch_providers";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import WatchProviderList from "./WatchProviderList";

const Collapse = dynamic(() => import("./Collapse"));

const WatchProviders = (props: WatchProvidersProps) => {
	const { providers, movieWatchProviders } = props;
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedProvider, setSelectedProvider] = useState({} as MovieWatchProviders.ProviderObject);

	useEffect(() => {
		setSelectedProvider(movieWatchProviders.results[selectedCountry]);
	}, [selectedCountry, selectedProvider]);

	return (
		<Collapse title="Where to watch">
			<select className="select select-bordered w-full max-w-sm block" defaultValue={"default"} onChange={(e) => setSelectedCountry(e.target.value)}>
				<option disabled value="default">
					Select a country
				</option>
				{providers.map((provider: MovieWatchProviders.Result) => (
					<option key={provider.english_name} value={provider.iso_3166_1}>
						{provider.english_name}
					</option>
				))}
			</select>
			<div className="mt-3">
				{selectedProvider !== undefined ? (
					<>
						<WatchProviderList provider={selectedProvider.rent} title="Rent" />
						<WatchProviderList provider={selectedProvider.buy} title="Buy" />
						<WatchProviderList provider={selectedProvider.flatrate} title="Flat Rate" />
					</>
				) : null}
			</div>
		</Collapse>
	);
};

export default WatchProviders;
