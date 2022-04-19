// components
import Head from "next/head";
import { useRouter } from "next/router";

const SearchIndex = () => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Search | MovieDB</title>
				<meta name="description" content="MovieDB - Find films and movies from everywhere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="pt-5 h-[calc(100vmin-230px)]">
				<form
					className="flex items-center w-full justify-center search-form"
					action=""
					onSubmit={(e) => {
						e.preventDefault();
						const target = document.getElementById("search") as HTMLInputElement;
						const query = target.value;

						router.push(`/search/${query}`);
					}}
				>
					<input type="search" placeholder="Search..." className="input input-primary input-lg w-full max-w-lg" id="search" />
					<button className="btn btn-primary btn-lg btn-square">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
				</form>
			</main>
		</>
	);
};

export default SearchIndex;
