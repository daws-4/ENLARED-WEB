import Image from "next/image";

export default function LandingFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo5.png"
                            alt="ENLARED Logo"
                            width={100}
                            height={30}
                            className="object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="font-bold text-xl text-white tracking-tight">
                                ENLARED <span className="text-sky-500">VE</span>
                            </span>
                            <p className="text-xs mt-1">RIF: J-50787105-3</p>
                        </div>
                    </div>
                    <div className="text-sm text-center md:text-right">
                        <p>© {year} ENLARED VE C.A.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
