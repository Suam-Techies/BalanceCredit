import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://giftcardmallbalance.credit"),
  title: "GiftCardMall/Mygift | Activate Gift Card | Verify Your Card",
  description:
    "Discover GiftCardMall/Mygift balance tips, card activation steps, Visa transaction fundamentals and helpful responses to frequent prepaid gift card inquiries.",
  authors: [{ name: "GiftCardMallBalance.credit Editorial Team" }],
  openGraph: {
    type: "website",
    title: "GiftCardMallBalance.credit | Activate Gift Card | Verify Balance",
    description:
      "A hands-on independent guide to prepaid gift card balances, activation, Visa transactions and common GiftCardMall/Mygift questions.",
    url: "https://giftcardmallbalance.credit/",
    siteName: "GiftCardMallBalance.credit",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "GiftCardMallBalance.credit Guide",
    description:
      "Understand prepaid gift card balances, activation procedures, Visa payments and typical card issues.",
  },
  alternates: {
    canonical: "https://giftcardmallbalance.credit/",
    languages: {
      "en-US": "https://giftcardmallbalance.credit/",
      en: "https://giftcardmallbalance.credit/",
      "x-default": "https://giftcardmallbalance.credit/",
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  other: {
    "theme-color": "#faf7fc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
