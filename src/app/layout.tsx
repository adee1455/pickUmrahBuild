import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"
import ClientBody from "./ClientBody";

export const metadata = {
  title: "PickUmrah",
  description: "PickUmrah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <Analytics/>
      <body suppressHydrationWarning className={inter.className}>
      <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
