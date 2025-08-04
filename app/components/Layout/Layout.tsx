import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutRoot, MainRoot } from "./Layout.styles";

export const Layout = ({ children }) => {
  return (
    <LayoutRoot>
      <Head>
        <title>Enterprise Solutions Tech</title>
        <link rel="icon" href="/assets/images/icon.png" />
      </Head>
      <Header />
      <MainRoot>{children}</MainRoot>
      <Footer />
    </LayoutRoot>
  );
};
