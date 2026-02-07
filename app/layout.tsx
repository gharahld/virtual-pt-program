import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtual PT Program - Home Exercise for Parents",
  description: "A comprehensive physical therapy tool for parents to manage home exercise programs for their children",
  keywords: ["physical therapy", "pediatric", "exercise program", "home therapy"],
  authors: [{ name: "TechAction Studio" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Virtual PT Program",
    description: "Manage your child's physical therapy exercises at home",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
