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

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

