// app/layout.jsx or layout.tsx (Next.js 13+ App Router)
import { Libre_Caslon_Text, Poppins } from "next/font/google";
import Footer from "./(root)/components/footer/Footer";
import Header from "./(root)/components/header/Header";
import "./globals.css";

// Font import

// Load both fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-caslon",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${libreCaslonText.variable}`}
    >
      <body className="bg-white font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
