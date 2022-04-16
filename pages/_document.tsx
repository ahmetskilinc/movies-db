import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
			</Head>
			<body style={{ paddingTop: "60px" }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
