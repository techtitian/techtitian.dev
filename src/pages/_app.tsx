import type { AppProps } from "next/app";
import "../styles/globals.css";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
