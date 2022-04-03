import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoadingSpinner from "./components/LoadingSpinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Suspense fallback={<LoadingSpinner />}>
			<App />
		</Suspense>
	</React.StrictMode>
);
