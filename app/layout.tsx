import type { Metadata } from "next";
import "./globals.css";
import Header from "./_section/header";
import Footer from "./_section/footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Snooze",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=telma@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-roboto bg-[#C8E0CA] antialiased`}>
        <Header />

        {children}

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
