import { useState } from "react";
import Link from "next/link";
import type { HomeHeroProps } from "../models/props";

const HomeHero = (props: HomeHeroProps) => {
	const { movies } = props;
	const [showMoreOverview, setShowMoreOverview] = useState(false);

	return (
		<div id="MoviesHeroCarousel" className="carousel slide relative" data-bs-ride="carousel">
			<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-1 lg:mb-4 z-20">
				{movies.map((movie, index) => (
					<button
						key={index}
						type="button"
						data-bs-target="#MoviesHeroCarousel"
						data-bs-slide-to={index}
						className={`${index === 0 ? "active" : ""} h-[5px] lg:h-[3px]`}
						aria-current={index === 0 ? "true" : "false"}
						aria-label={`Slide ${index + 1}`}
					></button>
				))}
			</div>
			<div className="carousel-inner relative w-full overflow-hidden">
				{movies.map((movie, index) => (
					<div
						key={index}
						className={`carousel-item float-left ${
							index === 0 ? "active" : ""
						} w-full py-8 relative after:content-[''] after:bg-slate-500 after:w-full after:h-full after:bg-opacity-60 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-[1] bg-cover bg-center`}
						style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})` }}
					>
						<div className="flex flex-col lg:flex-row justify-center items-center mx-auto lg:max-w-cs relative z-10 px-6 lg:px-cs ">
							<img
								loading="lazy"
								src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
								alt={movie.type === "movie" ? movie.title : movie.name}
								className="w-44 lg:w-72 h-64 lg:h-96 object-cover rounded-xl shadow-2xl lg:mr-6 mb-2 lg:mb-0"
							/>
							<div>
								<h1 className="text-xl lg:text-5xl font-bold text-white">{movie.type === "movie" ? movie.title : movie.name}</h1>
								<p className="pt-3 pb-2 text-white">{movie.overview}</p>
								<Link href={`${movie.type === "tv" ? "/tv" : "/movie"}/${movie.id}`}>
									<a className="btn">Show me</a>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev absolute top-0 bottom-0 w-5 lg:w-8 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 z-20"
				type="button"
				data-bs-target="#MoviesHeroCarousel"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next absolute top-0 bottom-0 w-5 lg:w-8 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 z-20"
				type="button"
				data-bs-target="#MoviesHeroCarousel"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default HomeHero;
