import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";
import React from "react";
export default class MyDocument extends Document{
    static async getInitialProps(ctx:DocumentContext): Promise<DocumentInitialProps>{
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps,}
    }
    render():JSX.Element {
        return(
            <Html lang={this.props.locale}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap"
                          rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

