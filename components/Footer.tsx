import Link from "next/link";

const Footer = () => {
	return (
		<footer className="p-10 bg-base-200 text-base-content">
			<div className="footer lg:max-w-cs mx-auto">
				<div>
					<a href="https://www.ahmetk.dev/" target="_blank" rel="noreferrer">
						<svg className="h-full w-14 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.28 91.8">
							<path
								d="M93.27 91.8H80a6.82 6.82 0 0 1-6.12-3.8L33.17 4.92A3.42 3.42 0 0 1 36.24 0h12.61A6.81 6.81 0 0 1 55 3.82l41 83.66a3 3 0 0 1-2.73 4.32Z"
								fill="#fefefe"
							/>
							<circle cx="13.8" cy="78" r="13.8" fill="#fefefe" />
						</svg>
						<p>AhmetK.dev</p>
					</a>
					<a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
						<svg className="h-full w-14 mr-2 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.04 133.4">
							<defs>
								<linearGradient id="a" y1="66.7" x2="185.04" y2="66.7" gradientUnits="userSpaceOnUse">
									<stop offset="0" stopColor="#90cea1" />
									<stop offset=".56" stopColor="#3cbec9" />
									<stop offset="1" stopColor="#00b3e5" />
								</linearGradient>
							</defs>
							<g data-name="Layer 2">
								<path
									d="M51.06 66.7A17.67 17.67 0 0 1 68.73 49h-.1A17.67 17.67 0 0 1 86.3 66.7a17.67 17.67 0 0 1-17.67 17.67h.1A17.67 17.67 0 0 1 51.06 66.7Zm82.67-31.33h32.9A17.67 17.67 0 0 0 184.3 17.7 17.67 17.67 0 0 0 166.63 0h-32.9a17.67 17.67 0 0 0-17.67 17.7 17.67 17.67 0 0 0 17.67 17.67Zm-113 98h63.9a17.67 17.67 0 0 0 17.67-17.67A17.67 17.67 0 0 0 84.63 98h-63.9a17.67 17.67 0 0 0-17.67 17.7 17.67 17.67 0 0 0 17.67 17.67Zm83.92-49h6.25L125.5 49h-8.35l-8.9 23.2h-.1L99.4 49h-8.9Zm32.45 0h7.8V49h-7.8Zm22.2 0h24.95V77.2H167.1V70h15.35v-7.2H167.1v-6.6h16.25V49h-24ZM10.1 35.4h7.8V6.9H28V0H0v6.9h10.1Zm28.9 0h7.8V20.1h15.1v15.3h7.8V0h-7.8v13.2H46.75V0H39Zm41.25 0h25v-7.2H88V21h15.35v-7.2H88V7.2h16.25V0h-24Zm-79 49H9V57.25h.1l9 27.15H24l9.3-27.15h.1V84.4h7.8V49H29.45l-8.2 23.1h-.1L13 49H1.2Zm112.09 49H126a24.59 24.59 0 0 0 7.56-1.15 19.52 19.52 0 0 0 6.35-3.37 16.37 16.37 0 0 0 4.37-5.5 16.91 16.91 0 0 0 1.72-7.58 18.5 18.5 0 0 0-1.68-8.25 15.1 15.1 0 0 0-4.52-5.53 18.55 18.55 0 0 0-6.73-3.02 33.54 33.54 0 0 0-8.07-1h-11.71Zm7.81-28.2h4.6a17.43 17.43 0 0 1 4.67.62 11.68 11.68 0 0 1 3.88 1.88 9 9 0 0 1 2.62 3.18 9.87 9.87 0 0 1 1 4.52 11.92 11.92 0 0 1-1 5.08 8.69 8.69 0 0 1-2.67 3.34 10.87 10.87 0 0 1-4 1.83 21.57 21.57 0 0 1-5 .55h-4.15Zm36.14 28.2h14.5a23.11 23.11 0 0 0 4.73-.5 13.38 13.38 0 0 0 4.27-1.65 9.42 9.42 0 0 0 3.1-3 8.52 8.52 0 0 0 1.2-4.68 9.16 9.16 0 0 0-.55-3.2 7.79 7.79 0 0 0-1.57-2.62 8.38 8.38 0 0 0-2.45-1.85 10 10 0 0 0-3.18-1v-.1a9.28 9.28 0 0 0 4.43-2.82 7.42 7.42 0 0 0 1.67-5 8.34 8.34 0 0 0-1.15-4.65 7.88 7.88 0 0 0-3-2.73 12.9 12.9 0 0 0-4.17-1.3 34.42 34.42 0 0 0-4.63-.32h-13.2Zm7.8-28.8h5.3a10.79 10.79 0 0 1 1.85.17 5.77 5.77 0 0 1 1.7.58 3.33 3.33 0 0 1 1.23 1.13 3.22 3.22 0 0 1 .47 1.82 3.63 3.63 0 0 1-.42 1.8 3.34 3.34 0 0 1-1.13 1.2 4.78 4.78 0 0 1-1.57.65 8.16 8.16 0 0 1-1.78.2H165Zm0 14.15h5.9a15.12 15.12 0 0 1 2.05.15 7.83 7.83 0 0 1 2 .55 4 4 0 0 1 1.58 1.17 3.13 3.13 0 0 1 .62 2 3.71 3.71 0 0 1-.47 1.95 4 4 0 0 1-1.23 1.3 4.78 4.78 0 0 1-1.67.7 8.91 8.91 0 0 1-1.83.2h-7Z"
									fill="url(#a)"
									data-name="Layer 1"
								/>
							</g>
						</svg>
						<p>The Movie Database</p>
					</a>
				</div>
				<div>
					<Link href="/movie">
						<a className="link link-hover">
							<span className="footer-title text-white">Movies</span>
						</a>
					</Link>
					<Link href="/movie/popular">
						<a className="link link-hover">Popular</a>
					</Link>
					<Link href="/movie/trending">
						<a className="link link-hover">Trending</a>
					</Link>
				</div>
				<div>
					<Link href="/tv">
						<a className="link link-hover">
							<span className="footer-title text-white">TV</span>
						</a>
					</Link>
					<Link href="/tv/popular">
						<a className="link link-hover">Popular</a>
					</Link>
					<Link href="/tv/trending">
						<a className="link link-hover">Trending</a>
					</Link>
				</div>
				<div>
					<span className="footer-title text-white">Legal</span>
					<Link href="/terms">
						<a className="link link-hover">Terms of use</a>
					</Link>
					<Link href="/privacy">
						<a className="link link-hover">Privacy policy</a>
					</Link>
					<Link href="/cookies">
						<a className="link link-hover">Cookie policy</a>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
