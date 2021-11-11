import '../styles/css/globals.css'
import '../styles/sass/style.sass'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <>
          <Head>
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <link rel="icon" href="/favicon.ico" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap"
                            rel="stylesheet" />
              <title>Title</title>
          </Head>
        <Component {...pageProps} />
      </>
  )

}

export default MyApp
