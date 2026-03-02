"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
];

export default function LandingNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Brand */}
                <a href="#inicio" className="flex items-center gap-3 group">
                    <Image
                        src="/logo2.png"
                        alt="ENLARED Logo"
                        width={90}
                        height={20}
                        className="object-contain"
                    />
                    <span className="font-bold text-2xl tracking-tight" style={{ color: "#0c4a6e" }}>
                        ENLARED <span style={{ color: "#0284c7" }}>VE</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 hover:text-sky-600 font-medium transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <a
                        href="#contacto"
                        className="bg-sky-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-sky-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Solicitar Soporte
                    </a>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden text-gray-600 hover:text-sky-600 p-2"
                    aria-label="Abrir menú"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="bg-white border-t border-gray-100 shadow-lg w-full pt-2 pb-6 px-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={close}
                            className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
