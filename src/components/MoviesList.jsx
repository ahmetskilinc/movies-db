import { useEffect, useState } from "react";
import { MovieCard, Hero } from "./";

const MoviesList = () => {
	const [movies, setMovies] = useState([]);
	const [heroMovies, setHeroMovies] = useState([]);
	const fetchPopularMovies = async () => {
		const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6b40bff7fc9e4ef1a2d27fe2e3894564&language=en-US&page=1");
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		fetchPopularMovies().then((data) => {
			setHeroMovies([
				data.results[Math.floor(Math.random() * (20 - 0) + 0)],
				data.results[Math.floor(Math.random() * (20 - 0) + 0)],
				data.results[Math.floor(Math.random() * (20 - 0) + 0)],
			]);
			setMovies(data.results);
		});
	}, []);

	return (
		<main>
			{movies.length > 0 ? (
				<>
					<Hero movies={heroMovies} />
					<div className="lg:w-cs my-0 mx-auto">
						<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-6 mx-4 lg:mx-0">
							{movies.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
						</div>
					</div>
				</>
			) : null}
		</main>
	);
};

export default MoviesList;
