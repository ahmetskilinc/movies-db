import { parseISO, format } from "date-fns";
import { isMobile } from "react-device-detect";
import { ExternalIds } from "../models/external_ids";
import { Movie } from "../models/movie";
import { Tv } from "../models/tv";
import ExternalLinkHero from "./ExternalLinkHero";

interface HeroProps {
	movie: Movie.RootObject | Tv.RootObject;
	externalIds: ExternalIds.RootObject;
	type: string;
}

const Hero = (props: HeroProps) => {
	const { movie, externalIds, type } = props;

	const { backdrop_path, poster_path, name, title, genres, release_date, first_air_date, last_air_date, overview, homepage, vote_average } = movie;
	const { twitter_id, imdb_id, facebook_id, instagram_id } = externalIds;

	return (
		<>
			<style jsx>{`
				.radial-progress {
					--value: ${vote_average * 10};
					--size: 3rem;
				}
			`}</style>
			<div
				className="w-full py-8 relative after:content-[''] after:bg-slate-500 after:w-full after:h-full after:bg-opacity-60 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-[1] bg-cover bg-center"
				style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})` }}
			>
				<div className="flex flex-col lg:flex-row justify-center items-center mx-auto lg:max-w-cs relative z-10 px-6 lg:px-cs">
					<img
						loading="lazy"
						src={`https://image.tmdb.org/t/p/w342${poster_path}`}
						alt={type === "movie" ? title : name}
						width={isMobile ? "176px" : "288px"}
						height={isMobile ? "256px" : "384px"}
						className="w-44 lg:w-72 h-64 lg:h-96 rounded-xl shadow-2xl lg:mr-6 mb-2 lg:mb-0"
					/>
					<div>
						<h1 className="text-xl lg:text-5xl font-bold text-white">{type === "movie" ? title : name}</h1>
						<p className="text-gray-300 pt-2">
							{genres.map((genre, index) => `${genre.name}${index === genres.length - 1 ? "" : ", "}`)}
							{" - "}
							{type === "movie"
								? release_date !== undefined && release_date !== null && release_date !== ""
									? format(parseISO(release_date), "dd MMM yy")
									: "N/A"
								: first_air_date !== undefined && first_air_date !== null && first_air_date !== ""
								? `${format(parseISO(first_air_date), "dd MMM yy")} - ${
										last_air_date !== undefined && last_air_date !== null && last_air_date !== ""
											? format(parseISO(last_air_date), "dd MMM yy")
											: "N/A"
								  }`
								: "N/A"}
						</p>
						<p className="py-3 text-white">{overview}</p>
						<div className="flex gap-2 items-center">
							{imdb_id !== null ? <ExternalLinkHero link={"https://www.imdb.com/title/" + imdb_id} title="IMDb" /> : null}
							{facebook_id !== null ? <ExternalLinkHero link={"https://www.facebook.com/" + facebook_id} title="Facebook" /> : null}
							{twitter_id !== null ? <ExternalLinkHero link={"https://www.twitter.com/" + twitter_id} title="Twitter" /> : null}
							{instagram_id !== null ? <ExternalLinkHero link={"https://www.instagram.com/" + instagram_id} title="Instagram" /> : null}
							{homepage !== null ? <ExternalLinkHero link={homepage} title="Homepage" /> : null}
						</div>
						<div className="radial-progress bg-primary text-primary-content border-4 border-primary">{vote_average * 10}%</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
