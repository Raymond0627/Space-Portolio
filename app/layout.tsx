import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import CardSelection from "@/components/main/UserForm";
import Cards from "@/components/main/Cards";
import MajorArcanaTitle from "@/components/sub/MajorArcane";
import ChooseCard from "@/components/main/ChooseCard";
import CardStack from "@/components/main/ChooseCard";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <MajorArcanaTitle />
        <Cards />
        <CardSelection />
        <CardStack/>
            <Footer />
      </body>
    </html>
  );
}
