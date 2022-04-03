import { format, parseISO } from "date-fns";

const MovieCard = ({ movie }) => {
	const { poster_path, release_date, title } = movie;

	return (
		<div className="bg-base-200 shadow-md rounded-2xl space-x-4 hover:shadow-xl flex items-center hover:scale-[1.02] hover:-translate-y-2 transition-all">
			<div className="w-1/3">
				<img className="rounded-l-2xl shadow-xl" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
			</div>
			<div className="flex flex-col w-2/3">
				<div className="flex justify-between items-start">
					<h2 className="text-2xl font-bold">{title}</h2>
				</div>
				<div>
					<div className="text-lg text-gray-600">{format(parseISO(release_date), "yyyy")}</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
