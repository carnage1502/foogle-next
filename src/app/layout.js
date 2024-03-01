import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Foogle",
  description:
    "An open source Google clone built with Nextjs and tailwindcss by Carnage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
