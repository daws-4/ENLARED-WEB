import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex items-center pt-20"
            style={{
                backgroundColor: "#0c4a6e",
                backgroundImage:
                    "linear-gradient(rgba(12,74,110,0.8), rgba(12,74,110,0.9)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center max-w-4xl mx-auto py-20">
                    <span className="text-sky-100 font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Tecnología y Telecomunicaciones
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Soluciones Integrales de{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Conectividad
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Especialistas en infraestructura de telecomunicaciones, fibra óptica,
                        solución de averías de internet y desarrollo de software.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#servicios"
                            className="bg-sky-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-sky-500 transition-all shadow-lg flex items-center justify-center gap-2 text-base"
                        >
                            Nuestros Servicios
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#contacto"
                            className="text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2 text-base"
                        >
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
