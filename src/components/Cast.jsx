import { Link } from "react-router-dom";

const Cast = ({ credits }) => {
	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<h1 className="text-white text-bold text-2xl mb-3">Cast</h1>
			<div className="flex overflow-x-scroll overflow-y-visible gap-4 rounded-xl">
				{credits.cast.map((character, index) => (
					<Link to={`/person/${character.id}`} className="w-32 lg:w-44 flex-shrink-0" key={index}>
						<img
							loading="lazy"
							src={`https://image.tmdb.org/t/p/w185${character.profile_path}`}
							alt={character.name}
							className="w-32 lg:w-44 ratio-4x3 object-cover rounded-xl shadow-2xl lg:mr-6"
						/>
						<div>
							<h1 className="text-md lg:text-xl font-bold text-white">{character.name}</h1>
							<p className="text-gray-300 pt-2">{character.character}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Cast;
