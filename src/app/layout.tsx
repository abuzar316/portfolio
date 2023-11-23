import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/header/Navigation";
import Footer from "@/components/header/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Abuzar - Developer",
  description:
    "Hi there! My name is Mohammad Abuzar and I’m a software engineer with over 3 years of experience in the industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-primary dark:text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
