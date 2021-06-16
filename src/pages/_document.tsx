import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocumen extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>ig.news</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
