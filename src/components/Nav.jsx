import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	const [showNav, setShowNav] = useState(false);

	return (
		<nav className="bg-accent p-4 fixed w-screen z-50 top-0">
			<div className="flex items-center justify-between flex-wrap lg:w-cs my-0 mx-auto">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<svg className="h-full w-7 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.28 91.8">
						<path
							d="M93.27 91.8H80a6.82 6.82 0 0 1-6.12-3.8L33.17 4.92A3.42 3.42 0 0 1 36.24 0h12.61A6.81 6.81 0 0 1 55 3.82l41 83.66a3 3 0 0 1-2.73 4.32Z"
							fill="#fefefe"
						/>
						<circle cx="13.8" cy="78" r="13.8" fill="#fefefe" />
					</svg>
					<span className="font-semibold text-xl tracking-tight">MovieDB</span>
				</div>
				<div className="block lg:hidden">
					<button
						className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
						onClick={() => setShowNav(!showNav)}
					>
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				<div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${showNav ? "block" : "hidden"}`}>
					<div className="text-sm lg:flex-grow">
						<Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
							Home
						</Link>
						{/* <Link to="/movies" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
							Movies
						</Link>
						<Link to="/tv-shows" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
							TV Shows
						</Link> */}
					</div>
					{/* <div className="relative mx-auto text-gray-600">
						<input
							className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
							type="search"
							name="search"
							placeholder="Search"
						/>
						<button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
							<svg
								className="text-gray-600 h-4 w-4 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								version="1.1"
								id="Capa_1"
								x="0px"
								y="0px"
								viewBox="0 0 56.966 56.966"
								// style="enable-background:new 0 0 56.966 56.966;"
								xmlSpace="preserve"
								width="512px"
								height="512px"
							>
								<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
							</svg>
						</button>
					</div> */}
					{/* <div>
					<Link
						href="#"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
					>
						Download
					</Link>
				</div> */}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
