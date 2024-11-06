import { Poppins } from "next/font/google";
const inter = Poppins({ weight: ["100","200","300","400", "500", "600", "700"], subsets: ["latin"] });
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treinamento Ondetah",
  description: "Ondetah - Funcionalidades, Análises e Resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
