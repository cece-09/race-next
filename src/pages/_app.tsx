import { AppProps } from "next/app";
import { ThemeProvider } from "../utils/ThemeProvider";
import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <Component {...pageProps} />
      </Head>
    </ThemeProvider>
  );
}
