import { Wifi, Cable, Cpu, HardDrive, Server, Headset } from "lucide-react";

const services = [
    {
        icon: Wifi,
        title: "Soporte y Conectividad",
        description:
            "Instalación, mantenimiento y solución de averías de servicios de internet. Reparación de conexiones alámbricas e inalámbricas para garantizar una navegación ininterrumpida.",
    },
    {
        icon: Cable,
        title: "Infraestructura y Fibra Óptica",
        description:
            "Elaboración de proyectos integrales en sistemas de comunicación. Implementación y mantenimiento especializado de troncales y subtroncales de fibra óptica.",
    },
    {
        icon: Cpu,
        title: "Desarrollo de Software e IA",
        description:
            "Diseño y creación de software administrativos modernos y aplicaciones avanzadas potenciadas con inteligencia virtual adaptadas a sus necesidades.",
    },
    {
        icon: HardDrive,
        title: "Suministros Tecnológicos",
        description:
            "Provisión de repuestos de alta calidad y suministros generales de tecnología e informática para mantener sus equipos al día.",
    },
    {
        icon: Server,
        title: "Redes de Telecomunicaciones",
        description:
            "Diseño, construcción y mantenimiento de infraestructuras complejas asociadas a redes de telecomunicaciones a nivel corporativo.",
    },
];

export default function ServicesSection() {
    return (
        <section id="servicios" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestro Catálogo de Servicios
                    </h2>
                    <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-gray-600">
                        Ofrecemos un portafolio completo diseñado para garantizar la
                        estabilidad operativa e innovación tecnológica de su empresa.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className="group bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-default"
                            >
                                <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}

                    {/* CTA Card */}
                    <div className="bg-sky-600 p-8 rounded-2xl shadow-lg text-white flex flex-col justify-center items-center text-center">
                        <Headset className="w-16 h-16 mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold mb-3">¿Necesita asistencia técnica?</h3>
                        <p className="text-sky-100 mb-6 text-sm">
                            Contamos con un equipo de profesionales listos para resolver sus
                            averías rápidamente.
                        </p>
                        <a
                            href="#contacto"
                            className="bg-white text-sky-700 font-bold py-3 px-6 w-full rounded-lg hover:bg-gray-100 transition-colors text-center block"
                        >
                            Agendar Visita
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
