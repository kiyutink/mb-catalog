import "../styles/default/default.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NProgress from "nprogress";
import { Router } from "next/router";
import { NextPageContext } from "next";
import { getBoard } from "../lib/helpers";
import { BoardContext } from "../lib/board-context";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const CustomApp = ({ Component, pageProps, board }: any) => {
  return (
    <BoardContext.Provider value={board}>
      <Component {...pageProps} />
    </BoardContext.Provider>
  );
};

CustomApp.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  return { board: getBoard(ctx.req) };
};

export default CustomApp;
