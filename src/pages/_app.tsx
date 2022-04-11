import Head from "next/head";
import {AppProps} from "next/app";

require("@/styles/global.less")

export default function App({Component, pageProps } : AppProps) {
    return (
        <>
            <Head><title>Expense</title></Head>
            <main>
                <Component {...pageProps}></Component>
            </main>
        </>

    )
}