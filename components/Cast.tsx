import { isMobile } from "react-device-detect";
import Link from "next/link";
import type { CastProps } from "../models/props";
import Image from "next/image";

const Cast = (props: CastProps) => {
	const { credits } = props;

	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<h1 className="text-white text-bold text-2xl mb-3">Cast</h1>
			<div className="flex overflow-x-scroll overflow-y-visible gap-3 rounded-xl">
				{credits !== undefined &&
					credits.cast.map((cast, index) => (
						<Link href={`/person/${cast.id}`} key={index}>
							<a className="w-24 lg:w-36 flex-shrink-0">
								<Image
									loading="lazy"
									src={cast.profile_path ? `https://image.tmdb.org/t/p/w185${cast.profile_path}` : "/images/placeholder.jpeg"}
									alt={cast.name}
									width={isMobile ? 96 : 144}
									height={isMobile ? 144 : 208}
									className="w-24 lg:w-36 h-36 lg:h-52 object-cover rounded-xl shadow-2xl lg:mr-6"
								/>
								<div className="text-xs lg:text-sm pt-1 space-y-1">
									<h1 className="font-bold text-white">{cast.name}</h1>
									<p className="text-gray-300">{cast.character}</p>
								</div>
							</a>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Cast;
