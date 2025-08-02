// src/app/layout.js
import "@styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
  title: "ShopEase",
  description: "ShopEase — Your modern eCommerce platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}