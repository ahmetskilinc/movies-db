import { isMobile } from "react-device-detect";
import Link from "next/link";
import { Credits } from "../models/credits";

interface CastProps {
	credits: Credits.RootObject;
}

const Cast = (props: CastProps) => {
	const { credits } = props;

	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<h1 className="text-white text-bold text-2xl mb-3">Cast</h1>
			<div className="flex overflow-x-scroll overflow-y-visible gap-3 rounded-xl">
				{credits !== undefined &&
					credits.cast.map((character: Credits.Cast, index: number) => (
						<Link href={`/person/${character.id}`} key={index}>
							<a className="w-24 lg:w-36 flex-shrink-0">
								<img
									loading="lazy"
									src={character.profile_path ? `https://image.tmdb.org/t/p/w185${character.profile_path}` : "/images/placeholder.jpeg"}
									alt={character.name}
									width={isMobile ? "96pxpx" : "144px"}
									height={isMobile ? "144px" : "208px"}
									className="w-24 lg:w-36 h-36 lg:h-52 object-cover rounded-xl shadow-2xl lg:mr-6"
								/>
								<div className="text-xs lg:text-sm pt-1 space-y-1">
									<h1 className="font-bold text-white">{character.name}</h1>
									<p className="text-gray-300">{character.character}</p>
								</div>
							</a>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Cast;
