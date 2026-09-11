import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Emmanuel Makanjuola Apostolic Missions", description: "Apostle Emmanuel Makanjuola Apostolic Missions." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
