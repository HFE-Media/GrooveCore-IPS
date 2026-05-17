import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrooveCore Industrial and Plumbing Supplies | Pipe Cutting, Threading and Grooving",
  description:
    "GrooveCore supplies precision pipe cutting, pipe threading, pipe grooving, pipes, fittings, valves, couplings, flanges and industrial plumbing supplies in South Africa.",
  keywords: [
    "pipe cutting South Africa",
    "pipe threading",
    "pipe grooving",
    "industrial plumbing supplies",
    "pipes and fittings",
    "GrooveCore"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
