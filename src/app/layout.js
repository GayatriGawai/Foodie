import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { connectDB } from "../libs/mongoConnect";
import { AppProvider } from "../components/AppContext";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodie",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  connectDB();
  return (
    <html lang="en">
      <AppProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </AppProvider>
    </html>
  );
}
