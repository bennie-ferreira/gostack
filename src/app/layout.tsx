import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gostack | O maior lugar aonde se encontra os maiores tutorias, artigos e dicas sobre programação na internet",
  description: "Gostack é um lugar aonde se encontra os maiores tutorias, artigos e dicas sobre programação na internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex min-h-screen w-full flex-col">
          <Header />
          <main className={inter.className}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
