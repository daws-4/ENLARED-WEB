import LandingNavbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";
import LandingFooter from "@/components/landing/Footer";

export default function Home() {
    return (
        <>
            <LandingNavbar />
            <main className="flex-1">
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <ContactSection />
            </main>
            <LandingFooter />
        </>
    );
}
