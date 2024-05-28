import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import StarsCanvas from "@/components/StarBackground/StarBackground";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<어쩌다 개발자 />",
  description: "어쩌다 개발자 포트폴리오",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StarsCanvas />
        <AntdRegistry>
          <Header />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
