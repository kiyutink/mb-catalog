import "../styles/default/default.scss";
import "../styles/lhoft/lhoft.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App, { AppContext, AppProps } from "next/app";
import NProgress from "nprogress";
import { Router } from "next/router";
import { BoardContext } from "../lib/board-context";
import { getBoard } from "../lib/helpers";
import { Board } from "../lib/types/boards";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const CustomApp = ({
  Component,
  pageProps,
  board,
}: AppProps & { board: Board }) => {
  return (
    <BoardContext.Provider value={board}>
      <Component {...pageProps} />
    </BoardContext.Provider>
  );
};

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, board: getBoard(appContext.ctx.req) };
};

export default CustomApp;
