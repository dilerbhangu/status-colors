import "../styles/globals.css";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { useEffect } from "react";
import { useRouter, Router } from "next/router";
import Head from "next/head";
import * as gtag from "../lib/gtag";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  var title, descr, keywords;
  title = pageProps.title;
  descr = pageProps.descr;
  keywords = pageProps.keywords;

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,user-scalable=yes"
        />

        <title>{title}</title>
        <meta name="description" content={descr} />
        <meta name="keywords" content={keywords} />

        <link href="https://thestatuswiki.com/" rel="canonical" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
