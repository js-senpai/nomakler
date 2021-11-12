import '../styles/css/globals.css'
import '../styles/sass/style.sass'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config,library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(fas,fab);
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <>
          <Head>
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <link rel="icon" href="/favicon.ico" />
              <title>Title</title>
          </Head>
        <Component {...pageProps} />
      </>
  )

}

export default MyApp
