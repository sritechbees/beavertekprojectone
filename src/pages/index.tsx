import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Normal from "@/component/common/normal";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <main>
             <Header/>
        <Normal/>
              <Footer/>
      </main>
    </div>
  );
}
