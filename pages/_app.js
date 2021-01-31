import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import MDXComponents from "../components/MDXComponents";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <NextNProgress
          color="#FC211E"
          options={{ easing: "ease", speed: 500 }}
        />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
