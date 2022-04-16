// css
import "../styles/globals.css";
// types
import type { AppProps } from "next/app";
// components
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
