import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "GiftCardMall/Mygift | Activate Gift Card | Verify Your Card",
  description:
    "Discover GiftCardMall/Mygift balance tips, card activation steps, Visa transaction fundamentals and helpful responses to frequent prepaid gift card inquiries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
