import Head from "next/head";

import localFont from "next/font/local";
import CategoriesSection from "@/components/CategoriesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JBLAmplifier from "@/components/JBLAmplifier";
import Media from "@/components/Media";

import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Products from "@/components/Products";
import ShowCase from "@/components/ShowCase";
import StoreLocator from "@/components/StoreLocator";
import Worldwideshipping from "@/components/Worlswideshipping";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const basetrial=localFont({
  src:"./fonts/BaseNeueTrial-Expanded.ttf",
  variable:"--font-base-neue",
  weight:"100 900",
});

export default function Home() {
  return (
    <>
     <Head>
        <title> Premium Audio and Products</title>
        <meta name="description" content="Explore our wide range of premium audio products and more." />
      </Head>
    <Navbar />
    <HeroSection />
    <Offer />
    <Products />
    <CategoriesSection />
    <ShowCase />
    <Products />
    <StoreLocator />
    <JBLAmplifier />
    <Products />
    <Worldwideshipping />
   <Media />
   <Footer />
    </>
  );
}
