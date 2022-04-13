import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const HomeHero = ({ movies }) => {
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
						className={`${index === 0 ? "active" : ""}`}
						style={{ height: isMobile ? "5px" : "3px" }}
						aria-current={index === 0 ? "true" : "false"}
						aria-label={`Slide ${index + 1}`}
					></button>
				))}
			</div>
			<div className="carousel-inner relative w-full overflow-hidden">
				{movies.map((movie, index) => (
					<div
						key={index}
						className={`carousel-item float-left${
							index === 0 ? " active" : ""
						} w-full py-8 relative after:content-[''] after:bg-slate-500 after:w-full after:h-full after:bg-opacity-60 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-[1] bg-cover bg-center`}
						style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.obj.backdrop_path})` }}
					>
						<div className="flex flex-col lg:flex-row justify-center items-center mx-auto lg:max-w-cs relative z-10 px-6 lg:px-cs ">
							<img
								loading="lazy"
								src={`https://image.tmdb.org/t/p/w342${movie.obj.poster_path}`}
								alt={movie.type === "movie" ? movie.obj.title : movie.obj.name}
								width={isMobile ? "176px" : "288px"}
								height={isMobile ? "256px" : "384px"}
								className="w-44 lg:w-72 h-64 lg:h-96 object-cover rounded-xl shadow-2xl lg:mr-6"
							/>
							<div>
								<h2 className="text-sm font-bold text-gray-400">{movie.title}</h2>
								<h1 className="text-xl lg:text-5xl font-bold text-white">{movie.type === "movie" ? movie.obj.title : movie.obj.name}</h1>
								<p className="py-3 text-white">
									{isMobile && !showMoreOverview
										? `${movie.obj.overview.split(" ").splice(0, 32).join(" ")}${movie.obj.overview.split(" ").length > 32 ? "..." : ""}`
										: movie.obj.overview}{" "}
									{isMobile && movie.obj.overview.split(" ").length > 32 ? (
										<button
											className="text-white underline background-transparent outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowMoreOverview(!showMoreOverview)}
										>
											{showMoreOverview ? "Show less" : "Show more"}
										</button>
									) : null}
								</p>
								<Link
									to={`${movie.type === "tv" ? "tv" : "movie"}/${movie.obj.id}`}
									className="bg-accent hover:bg-accent-focus text-white font-bold py-2 px-4 rounded-full transition-all"
								>
									Show Me
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
