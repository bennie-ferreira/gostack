import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import "./globals.css";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Gostack | O maior lugar aonde se encontra os maiores tutorias, artigos e dicas sobre programação na internet",
  description: "Gostack é um lugar aonde se encontra os maiores tutorias, artigos e dicas sobre programação na internet",
};

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <div className="container mx-auto min-h-screen w-full flex-col">
          <main>
            <AnimatedCursor
              innerSize={8}
              outerSize={8}
              color='0, 0, 0'
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={5}
              clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
              ]}
            />
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
