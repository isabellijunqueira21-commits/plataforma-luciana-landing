import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luciana Junqueira · Nutricionista",
  description:
    "Acompanhamento nutricional próximo, no seu ritmo: check-ins gentis, materiais no seu tempo e uma evolução que você consegue ver. Sem dieta-castigo.",
  openGraph: {
    title: "Luciana Junqueira · Nutricionista",
    description:
      "Uma transformação sustentável começa com cuidado, não com castigo. Acompanhamento nutricional contínuo, no seu ritmo.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F1E8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
