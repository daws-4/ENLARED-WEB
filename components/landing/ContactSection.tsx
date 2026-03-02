"use client";

import { MapPin, Phone, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 5000);
    }

    return (
        <section id="contacto" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5">

                        {/* Left: Info */}
                        <div className="bg-sky-800 text-white p-10 lg:p-12 lg:col-span-2 flex flex-col justify-between relative overflow-hidden">
                            {/* Decorative blob */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-sky-600 rounded-full opacity-50 blur-2xl pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-2">Información de Contacto</h3>
                                <p className="text-sky-200 mb-10">
                                    Estamos a su disposición para resolver cualquier requerimiento
                                    tecnológico o de conectividad.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Dirección</h4>
                                            <p className="text-sky-100 text-sm leading-relaxed">
                                                Carrera 15, Esquina del Pasaje Acueducto, Local Nro 10-111.
                                                <br />
                                                Sector San Carlos, Parroquia Pedro María Morantes.
                                                <br />
                                                San Cristóbal, Táchira. Zona Postal 5001.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="p-10 lg:p-12 lg:col-span-3">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíenos un mensaje</h3>

                            {submitted && (
                                <div className="mb-6 p-4 bg-sky-50 border border-sky-200 text-sky-800 rounded-lg text-sm font-medium">
                                    ✅ Gracias por su mensaje. Un representante de ENLARED VE se comunicará pronto.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-sky-900">Nombre Completo</label>
                                        <input
                                            type="text"
                                            placeholder="Ej: Carlos Pérez"
                                            required
                                            className="border border-gray-200 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none rounded-md px-4 py-3 text-gray-800 transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-sky-900">Empresa / RIF</label>
                                        <input
                                            type="text"
                                            placeholder="Opcional"
                                            className="border border-gray-200 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none rounded-md px-4 py-3 text-gray-800 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-sky-900">Teléfono</label>
                                        <input
                                            type="tel"
                                            placeholder="+58 (000) 000-0000"
                                            required
                                            className="border border-gray-200 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none rounded-md px-4 py-3 text-gray-800 transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-sky-900">Tipo de Servicio</label>
                                        <select className="border border-gray-200 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none rounded-md px-4 py-3 text-gray-800 bg-white transition-colors h-[50px]">
                                            <option value="">Soporte de Internet</option>
                                            <option value="soporte">Soporte de Internet</option>
                                            <option value="proyectos">Proyecto Fibra Óptica</option>
                                            <option value="desarrollo">Desarrollo de Software / IA</option>
                                            <option value="suministros">Suministros Informáticos</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-sky-900">
                                        Detalle su requerimiento o avería
                                    </label>
                                    <textarea
                                        placeholder="Describa cómo podemos ayudarle..."
                                        required
                                        rows={4}
                                        className="border border-gray-200 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none rounded-md px-4 py-3 text-gray-800 resize-none transition-colors"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full font-bold py-4 text-base mt-4 bg-sky-600 text-white rounded-md hover:bg-sky-500 shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Enviar Solicitud
                                    <Send className="w-5 h-5 ml-2" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
