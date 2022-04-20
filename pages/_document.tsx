import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="keywords" content="Movies, TV Shows, Popular Movies, Movie, Tv Show, Series, MovieDB, Ahmet, Kilinc, Ahmet Kilinc, AhmetK" />

				<script src="./js/index.min.js"></script>
			</Head>
			<body className="pt-16">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
