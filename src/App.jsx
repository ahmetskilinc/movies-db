import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

const Nav = lazy(() => import("./components/Nav"));
const Home = lazy(() => import("./pages/Home"));
const Movie = lazy(() => import("./pages/Movie"));
const Tv = lazy(() => import("./pages/Tv"));

function App() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movie/:id" element={<Movie />} />
				<Route path="/tv/:id" element={<Tv />} />
				<Route path="/movies" element={<p>Movies</p>} />
				<Route path="/tv-shows" element={<p>TV Shows</p>} />
			</Routes>
		</Suspense>
	);
}

export default App;
