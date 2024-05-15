import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import SideBar from "@/components/navigation/sideBar/SideBar";
import NavBar from "@/components/navigation/navBar/NavBar";
import Logo from "@/components/logo/Logo";
import Image from "next/image";
import ogImage from "../app/assets/og.png";
import Hamburger from "@/components/hamburger/Hamburger";

import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

const template = `Description (what do you wanna built out? Being specific & detailed about your requirements will help get better reponses)

@basedbuildersbot `;

let CAST_URL = `https://warpcast.com/~/compose?text=${encodeURIComponent(
  template
)}`;

let OG_IMAGE = ogImage.src;

//replace with env for HOST
let CLIENT_URL = process.env.CLIENT_URL;
export const metadata = {
  title: "Basedbuilderbot",
  openGraph: {
    images: [OG_IMAGE],
  },
  other: {
    "fc:frame:image": `${CLIENT_URL}/${OG_IMAGE}`,
    "fc:frame": "vNext",
    "fc:frame:button:1": "Cast Query",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": CAST_URL,
    "fc:frame:button:2": "FAQ",
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target": `${CLIENT_URL}/faq`,
    "fc:frame:button:3": "Join",
    "fc:frame:button:3:action": "post",
    "fc:frame:button:3:post_url": `${CLIENT_URL}/api/frame-designation`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="mx-auto w-fit px-4 max-w-6xl sm:px-6 xl:max-w-4xl xl:px-16">
          <div className="page-container flex flex-col  w-full">
            <header className=" flex flex-row justify-between items-center py-10 max-[425px]:py-3">
              <Logo />
              <NavBar />
              <Hamburger />
            </header>
            <div className="content-container flex flex-row w-full">
              <div className=" menu min-w-[25%]  bg-[var(--bgSoft)] p-2 min-h-screen max-[900px]:hidden">
                <SideBar />
              </div>
              <div className="content flex flex-col w-full  p-1">
                {children}
                <Footer></Footer>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
