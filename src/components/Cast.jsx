import { Link } from "react-router-dom";

function Cast({ credits }) {
	return (
		<div className="w-full py-8">
			<div className="flex items-start mx-auto gap-4 lg:w-cs z-10 px-6 lg:p-0 overflow-scroll">
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
}

export default Cast;
