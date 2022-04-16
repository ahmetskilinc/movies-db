import dynamic from "next/dynamic";
import { Movies } from "../models/movie_popular";
import { TvPopular } from "../models/tv_popular";

const MovieCard = dynamic(() => import("./MovieCard"));
const LoadingSpinner = dynamic(() => import("./LoadingSpinner"));

interface MovieListProps {
	movies: Movies.Result[] | TvPopular.Result[];
	listTitle: string;
	type: string;
}

const MoviesList = (props: MovieListProps) => {
	const { movies, listTitle, type } = props;
	return (
		<article>
			{movies.length > 0 ? (
				<div className="lg:w-full_width_margin m-2 md:m-4">
					<h1 className="text-white text-bold text-2xl mb-3">{listTitle}</h1>
					<div className="flex overflow-x-scroll overflow-y-visible gap-4 rounded-xl">
						{movies.map((movie) => (
							<MovieCard key={movie.id} movie={movie} type={type} />
						))}
					</div>
				</div>
			) : (
				<LoadingSpinner />
			)}
		</article>
	);
};

export default MoviesList;
