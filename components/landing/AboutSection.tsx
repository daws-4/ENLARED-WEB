import Image from "next/image";
import { ShieldCheck, Award, MapPin } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="nosotros" className="py-24 bg-sky-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Sobre ENLAREDVE, C.A.
                        </h2>
                        <div className="w-20 h-1 bg-sky-400 rounded-full mb-8" />
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Somos una empresa orgullosamente venezolana, constituida
                            en el Estado Táchira. Nacemos con el compromiso de cerrar la brecha
                            digital y garantizar conexiones robustas para hogares y corporaciones.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-sky-800 p-3 rounded-full">
                                    <Award className="text-sky-400 w-5 h-5" />
                                </div>
                                <span className="font-medium">Servicio Profesional</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image + floating card */}
                    <div className="relative mt-8 lg:mt-0">
                        <Image
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                            alt="Equipo de tecnología"
                            width={800}
                            height={500}
                            className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                            unoptimized
                        />
                        {/* Floating card */}
                        <div className="absolute -bottom-6 -left-6 bg-sky-600 p-4 rounded-xl shadow-xl max-w-xs border border-sky-500">
                            <div className="flex items-center gap-4 mb-2">
                                <MapPin className="text-white w-8 h-8" />
                                <h4 className="font-bold text-xl text-white">Sede Principal</h4>
                            </div>
                            <p className="text-sky-100 text-sm">
                                San Cristóbal, Estado Táchira, Venezuela.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
