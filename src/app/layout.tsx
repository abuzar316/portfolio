import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/header/Navigation";
import Footer from "@/components/header/Footer";

export const metadata: Metadata = {
  title: "Mohammad Abuzar - Developer",
  description:
    "Hi there! My name is Mohammad Abuzar and I’m a software engineer with over 3 years of experience in the industry.",
  icons: { icon: `https://avatars.githubusercontent.com/u/84950162?v=4` },
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
