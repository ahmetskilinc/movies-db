import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const Nav = lazy(() => import("./components/Nav"));
const MoviesList = lazy(() => import("./components/MoviesList"));

function App() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Nav />
			<MoviesList />
		</Suspense>
	);
}

export default App;
