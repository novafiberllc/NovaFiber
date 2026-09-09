import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/shared/Footer";
import SiteHeader from "./components/shared/SiteHeader";
import SkipLink from "./components/shared/SkipLink";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "NovaFiber LLC",
  description: "Professional upholstery and carpet cleaning service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="flex w-full flex-col items-center">
        <SkipLink />
        <div className="absolute top-0 z-20 w-full">
          <SiteHeader variant="hero" />
        </div>
        <main
          id="main-content"
          tabIndex={-1}
          className="flex w-full flex-col items-center focus:outline-none"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
