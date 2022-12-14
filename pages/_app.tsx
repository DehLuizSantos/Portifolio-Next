import type { AppProps } from "next/app";
import ApplicationProviders from "../providers/ApplicationProviders";
import Layout from "../providers/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApplicationProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApplicationProviders>
  );
}
