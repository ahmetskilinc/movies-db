import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="keywords" content="Movies, TV Shows, Popular Movies, Movie, Tv Show, Series, MovieDB, Ahmet, Kilinc, Ahmet Kilinc, AhmetK" />

				<meta name="application-name" content="MovieDB" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="MovieDB" />
				<meta name="description" content="Find all your favourite Movies and TV Shows." />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-config" content="/icons/browserconfig.xml" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#212121" />

				<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
				<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

				<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/favicon.ico" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://movies.ahmetk.dev" />
				<meta name="twitter:title" content="MovieDB" />
				<meta name="twitter:description" content="Find all your favourite Movies and TV Shows." />
				<meta name="twitter:image" content="https://movies.ahmetk.dev/icons/android-chrome-192x192.png" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="MovieDB" />
				<meta property="og:description" content="Find all your favourite Movies and TV Shows." />
				<meta property="og:site_name" content="MovieDB" />
				<meta property="og:url" content="https://movies.ahmetk.dev" />
				<meta property="og:image" content="https://movies.ahmetk.dev/icons/apple-touch-icon.png" />
			</Head>
			<body className="pt-16">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
