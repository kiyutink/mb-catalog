import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { getBoard } from "../lib/helpers";
import { BoardLayoutTypes } from "../lib/types/boards";

class CustomDocument extends Document<{ layoutType: BoardLayoutTypes }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    if (ctx.req) {
      const { layoutType } = getBoard(ctx.req);
      return { ...initialProps, layoutType };
    } else return initialProps;
  }

  render() {
    return (
      <Html className={this.props.layoutType}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
