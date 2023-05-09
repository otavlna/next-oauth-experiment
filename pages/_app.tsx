import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "src/components/Layout";
import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
