import "../styles/default/default.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NProgress from "nprogress";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const CustomApp = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
