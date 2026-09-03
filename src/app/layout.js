import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/shared/Footer";

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
      <body className="flex flex-col items-center w-full">
        <main className="flex w-full flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
