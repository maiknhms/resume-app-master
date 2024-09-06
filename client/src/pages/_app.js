// import App from 'next/app'
import Head from "next/head";
import React from "react";
import DataProvider from "../redux/store";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<DataProvider>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
					/>
				</Head>
				<Component {...pageProps} />
			</DataProvider>
		</React.StrictMode>
	);
}
//   return { ...appProps }
// }
export default MyApp;
