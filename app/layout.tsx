import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "ghost-ai.com",
    template: "%s | ghost-ai.com",
  },
  description: "一人，一剑，守一座孤城，等你归来",
  openGraph: {
    title: "ghost-ai.com",
    description:
      "一人，一剑，守一座孤城，等你归来",
    url: "https://ghost-ai.com",
    siteName: "ghost-ai.com",
    images: [
      {
        url: "https://ghost-ai.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "zh-CN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
