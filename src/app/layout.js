import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: "PickUmrah",
  description: "PickUmrah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <Analytics/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
