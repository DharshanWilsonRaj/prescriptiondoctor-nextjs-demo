import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreFrontHeader from "@/components/(storefront)/header/header";
import StorefrontNavbar from "@/components/(storefront)/header/menu-links";
import StoreFrontFooter from "@/components/(storefront)/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreFrontHeader />
        <StorefrontNavbar />
        {children}
        <StoreFrontFooter />
      </body >
    </html >
  );
}
