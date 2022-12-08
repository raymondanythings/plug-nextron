import React from "react";
import type { AppProps } from "next/app";
import { Noto_Sans } from "@next/font/google";

import "styles/globals.css";

const noto = Noto_Sans({
  weight: ["100", "400", "500", "600", "700"],
  variable: "--noto-sans",
  subsets: ["latin"],
  adjustFontFallback: true,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>해더</title>
      <main className={`${noto.className} font-noto`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
