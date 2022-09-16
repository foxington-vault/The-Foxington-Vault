import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document"

export default class FoxingtonVault extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
