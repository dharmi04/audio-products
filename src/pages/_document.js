import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
          <link rel="icon" href="/logo.png" />
          {/* You can also use other formats or specify sizes */}
          <link rel="icon" href="logo.png" type="image/png" />
          
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
