import { Inter } from "next/font/google";
import "@/common/styles/globals.css";
import { NavBar } from "@/components/Header/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Placeholder",
  description: "Placeholder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
        {children}
        </body>
    </html>
  );
}
