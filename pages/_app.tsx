import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/LayoutComponent/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimatePresence } from "framer-motion";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence  exitBeforeEnter >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;
