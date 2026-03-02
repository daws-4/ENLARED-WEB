import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ENLARED VE C.A. | Soluciones en Telecomunicaciones y Tecnología",
    description:
        "Servicios de instalación, mantenimiento de internet, fibra óptica y desarrollo de software en San Cristóbal, Táchira.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className="scroll-smooth">
            <body
                className={`${inter.className} text-gray-800 antialiased bg-gray-50 flex flex-col min-h-screen`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
