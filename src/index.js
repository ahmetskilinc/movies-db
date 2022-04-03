import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Suspense fallback={<LoadingSpinner />}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
	</React.StrictMode>
);
