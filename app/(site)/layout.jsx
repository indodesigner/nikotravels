import { Outfit, Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "/components/footer";
import Providers from "/components/providers";
import Navbar from "/components/Navbar";

const outfit = Outfit({
  weight: ["variable"],
  subsets: ["latin"],
  variable: "--font-headings",
  display: "swap",
});

const noto_sans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  title: "Niko Travels - Inprogress",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // passing font variables to global.css can be accessed there and used
    <html lang="en" className={`${outfit.variable} ${noto_sans.variable}`}>
      {/* main layout page */}
      <body className="min-h-screen bg-white dark:bg-neutral-900">
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {/* rendering childrens - Next Js */}
            {children}
          </main>
          {/* common footer component (/components/footer.jsx)*/}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
