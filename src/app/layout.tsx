import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata = {
  title: "InfoJobs AI",
  description: "InfoJobs AI",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={montserrat.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
      <Analytics />
    </>
  );
}
