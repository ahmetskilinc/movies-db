// css
import "../styles/globals.css";
// types
import type { AppProps } from "next/app";
// components
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_ENV === "production") {
			const handleRouteChange = (url: string) => {
				gtag.pageview(url);
			};
			router.events.on("routeChangeComplete", handleRouteChange);
			router.events.on("hashChangeComplete", handleRouteChange);
			return () => {
				router.events.off("routeChangeComplete", handleRouteChange);
				router.events.off("hashChangeComplete", handleRouteChange);
			};
		}
	}, [router.events]);

	useEffect(() => {
		import("tw-elements");
	}, []);
	return (
		<>
			{process.env.NEXT_PUBLIC_ENV === "production" ? (
				<>
					<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
					<Script
						id="gtag-init"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${gtag.GA_TRACKING_ID}', {
						page_path: window.location.pathname,
						});
					`,
						}}
					/>
				</>
			) : null}
			<Nav />
			<Component {...pageProps} />
			{window.matchMedia("(display-mode: standalone)").matches ? null : <Footer />}
		</>
	);
}

export default MyApp;
