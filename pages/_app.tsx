import { AppKit } from "@/components/Web3Instance";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "AppKit",
  description: "AppKit Example",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppKit>
      <Head>
        <title>Apu.com | The Apu Apustaja NFT Collection</title>
        <meta
          name="description"
          content="The Official NFT Collection for all frens."
        />
        <meta name="theme-color" content="#060314" />
        <meta name="msapplication-navbutton-color" content="#060314" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#060314" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="https://nft.apu.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Apu.com | The Apu Apustaja NFT Collection"
        />
        <meta
          property="og:description"
          content="The Official NFT Collection for all frens."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Apu.com | The Apu Apustaja NFT Collection"
        />
        <meta
          name="twitter:description"
          content="The Official NFT Collection for all frens."
        />
        <meta name="twitter:site" content="@ApusCoin" />
        <meta
          property="og:image"
          content="https://cdn.apu.community/apu_nft_og.png"
        />
        <link
          rel="icon"
          href="https://cdn.apu.community/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </AppKit>
  );
}
