import { Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "~/components/Header";

import GlobalContext from "~/shared/contexts/globalContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContext>
      <Head>
        <title>Boilerplate NextJS 13</title>
        <meta charSet="UTF-8" key="charset" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="http-equiv" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
        <meta name="rating" content="general" key="rating" />
        <meta
          name="author"
          content="AstrOOnauta (https://github.com/AstrOOnauta)"
          key="author"
        />
        <meta
          name="description"
          content="Boilerplate NextJS 13 + Typescript + Chakra UI + Prettier + ESLint + Pre-commit (Husky + Lint-staged) + Cypress (e2e + component)"
          key="description"
        />
        <meta
          property="og:url"
          content="https://github.com/AstrOOnauta/next-13-boilerplate"
          key="url"
        />
        <meta property="og:title" content="Boilerplate Next 13" key="title" />
        <meta
          property="og:image"
          content="/images/dev-libraries.jpg"
          key="image"
        />
        <meta property="og:image:type" content="image/jpeg" key="image:type" />
        <meta property="og:image:width" content="1200" key="image:width" />
        <meta property="og:image:height" content="630" key="image:height" />
        <meta
          property="og:image:alt"
          content="Boilerplate NextJS 13 + Typescript + Chakra UI + Prettier + ESLint + Pre-commit (Husky + Lint-staged) + Cypress (e2e + component)"
          key="image:alt"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/favicon-180.png"
          key="apple"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon-192.png"
          key="android"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-180.png"
          key="favicon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon-128.png"
          key="icon128"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-180.png"
          key="icon180"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192.png"
          key="icon192"
        />
      </Head>
      <Flex flexDir="column" minH="100vh" w="100%" p={6}>
        <Header title="" />
        <Component {...pageProps} />
      </Flex>
    </GlobalContext>
  );
};

export default MyApp;
