import { parseISO, format } from "date-fns";
import { isMobile } from "react-device-detect";
import { ExternalIds } from "../models/external_ids";
import { Movie } from "../models/movie";
import { Tv } from "../models/tv";

interface HeroProps {
	movie: Movie.RootObject | Tv.RootObject;
	externalIds: ExternalIds.RootObject;
	type: string;
}

const Hero = (props: HeroProps) => {
	const { movie, externalIds, type } = props;
	return (
		<div
			className="w-full py-8 relative after:content-[''] after:bg-slate-500 after:w-full after:h-full after:bg-opacity-60 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-[1] bg-cover bg-center"
			style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}
		>
			<div className="flex flex-col lg:flex-row justify-center items-center mx-auto lg:max-w-cs relative z-10 px-6 lg:px-cs">
				<img
					loading="lazy"
					src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
					alt={type === "movie" ? movie.title : movie.name}
					width={isMobile ? "176px" : "288px"}
					height={isMobile ? "256px" : "384px"}
					className="w-44 lg:w-72 h-64 lg:h-96 rounded-xl shadow-2xl lg:mr-6 mb-2 lg:mb-0"
				/>
				<div>
					<h1 className="text-xl lg:text-5xl font-bold text-white">{type === "movie" ? movie.title : movie.name}</h1>
					<p className="text-gray-300 pt-2">
						{movie.genres.map((genre, index) => `${genre.name}${index === movie.genres.length - 1 ? "" : ", "}`)}
						{" - "}
						{type === "movie"
							? movie.release_date !== undefined && movie.release_date !== null && movie.release_date !== ""
								? format(parseISO(movie.release_date), "dd MMM yy")
								: "N/A"
							: movie.first_air_date !== undefined && movie.first_air_date !== null && movie.first_air_date !== ""
							? `${format(parseISO(movie.first_air_date), "dd MMM yy")} - ${
									movie.last_air_date !== undefined && movie.last_air_date !== null && movie.last_air_date !== ""
										? format(parseISO(movie.last_air_date), "dd MMM yy")
										: "N/A"
							  }`
							: "N/A"}
					</p>
					<p className="py-3 text-white">{movie.overview}</p>
					<div className="flex gap-2">
						{externalIds.imdb_id !== null ? (
							<a href={"https://www.imdb.com/title/" + externalIds.imdb_id} className="hover:underline">
								IMDb
							</a>
						) : null}
						{externalIds.facebook_id !== null ? (
							<a href={"https://www.facebook.com/" + externalIds.facebook_id} className="hover:underline">
								Facebook
							</a>
						) : null}
						{externalIds.twitter_id !== null ? (
							<a href={"https://www.twitter.com/" + externalIds.twitter_id} className="hover:underline">
								Twitter
							</a>
						) : null}
						{externalIds.instagram_id !== null ? (
							<a href={"https://www.instagram.com/" + externalIds.instagram_id} className="hover:underline">
								Instagram
							</a>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
