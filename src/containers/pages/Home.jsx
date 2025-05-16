import React, { useState } from "react";
import Layout from "hocs/layouts/Layout";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import whatsapp from "../../assets/icons/whatsapp.png";
import instagram from "../../assets/icons/instagram.png";
import arrowDownVideo from "assets/icons/arrow-down.png"; // Import directo
import Comedor from "assets/img/home-comedor.jpg"
import Oficina from "assets/img/home-oficina.jpg"
import Living from "assets/img/home-living.jpg"
import Diseño from "assets/img/home-diseño.jpg"
import Exterior from "assets/img/home-exterior.jpg"
import Dormitorio from "assets/img/home-dormitorio.jpg"
import HomeDesign from  "assets/video/home.mp4"

function Home() {
    const [activeRoom, setActiveRoom] = useState("04");

    const categories = [
    { id: "01", name: "Dormitorio", url: "category/2/Dormitorio.html", image: Dormitorio },
    { id: "02", name: "Living", url: "category/3/Living.html", image: Living },
    { id: "03", name: "Comedor", url: "category/46/Comedor.html", image: Comedor },
    { id: "04", name: "Estudio", url: "category/53/Estudio.html", image: Oficina },
    { id: "05", name: "Outdoor", url: "category/58/Outdoor.html", image: Exterior },
    ];
    return (
        <Layout>
            <section id="main-slider" className="relative w-full h-[600px] overflow-hidden">
                {/* Video Background */}
                <video 
                    src={HomeDesign}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{ 
                        objectPosition: "center 70%", // Ajusta la posición del video (center, top, bottom, left, right)
                        width: "100%",           // Ancho del video (puedes cambiar a un valor fijo como "1200px")
                        height: "100vh",         // Alto del video (puedes cambiar a un valor fijo)
                    }}
                    onError={(e) => {
                        e.target.style.display = "none"; // Oculta el video si no se carga
                        document.getElementById("fallback-bg").style.display = "block";
                    }}
                />
                
                {/* Background Image (Fallback if Video Fails) */}
                <div 
                    id="fallback-bg"
                    className="absolute inset-0 hidden md:block bg-cover bg-center z-0" 
                    style={{ backgroundImage: ""}} 
                />

                {/* Slider Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10">
                    <motion.div 
                        className="text-center space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-sm tracking-[0.3em]">AUTHENTIC LUXURY</h2>
                        <h1 className="text-6xl font-bold tracking-[0.3em]">MASTERPIECES</h1>
                    </motion.div>
                </div>

                {/* Social Media Links */}
                <motion.div 
                    className="absolute bottom-8 left-8 text-black space-y-0 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-xs text-left">2025 © Bold-craft Design.<br />
                        All rights reserved.
                    </div>                    
                </motion.div>

                <motion.div 
                    className="absolute bottom-8 right-16 text-black z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex space-x-20 mt-2">
                        <div className="relative group flex items-center">
                            <a 
                                href="https://wa.me/542213522513" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-base hover:text-primary transition-transform transform group-hover:-translate-x-20"
                            >
                                <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://wa.me/542213522513" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="absolute text-sm opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:-translate-x-16 -translate-x-20 ml-6"
                            >
                                Whatsapp
                                <span className="block w-0 group-hover:w-full h-[1px] bg-black transition-all duration-300"></span>
                            </a>
                        </div>
                        
                        <div className="relative group flex items-center">
                            <a 
                                href="https://www.instagram.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-base hover:text-primary transition-transform transform group-hover:-translate-x-16"
                            >
                                <img src={instagram} alt="WhatsApp" className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://www.instagram.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="absolute text-sm opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:-translate-x-12 -translate-x-20 ml-6"
                            >
                                Instagram
                                <span className="block w-0 group-hover:w-full h-[1px] bg-black transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </motion.div>
                
                {/* Scroll Down */}
                <motion.div 
    className="absolute top-60 right-4 flex flex-col items-center justify-center space-y-2 cursor-pointer text-black z-20 group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
>
    <motion.span 
        className="text-sm md:text-base font-bold tracking-[0.35em] transform -rotate-90 origin-center mb-20 text-black group-hover:text-gray-100 transition-colors duration-300" 
        style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.8)" }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
        SCROLL DOWN
    </motion.span>
    <motion.img 
        src={arrowDownVideo} 
        alt="Scroll Down" 
        className="w-16 h-16 object-contain mt-2 filter invert transition-transform duration-300 group-hover:scale-110"
        animate={{
            y: [0, 30],
            opacity: [1, 0],
        }}
        transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.5,
            ease: "easeInOut",
        }}
    />
</motion.div>
            </section>
            <section id="home-about" className="relative overflow-hidden">
                <div className="container mx-auto py-16 px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="hidden md:flex justify-center items-center">
                            <InView triggerOnce={false} /* Cambié a false */>
                            {({ inView, ref }) => (
                                <motion.img
                                ref={ref}
                                src= {Diseño}
                                alt="diseño"
                                className="w-90 h-90"
                                initial={{ opacity: 0, y: -50 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Efecto descendente
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                            )}
                            </InView>
                        </div>           
                        <div className="flex flex-col justify-center space-y-4">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                <motion.h5
                                ref={ref}
                                className="text-primary text-lg font-semibold tracking-[0.1em]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Efecto descendente
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                DISEÑO ARTESANAL AUDAZ
                                </motion.h5>
                                )}
                            </InView>           
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                <motion.h1
                                ref={ref}
                                className="text-3xl md:text-4xl text-black"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Efecto descendente
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                Dedicados a la satisfacción de miles de usuarios en la Argentina.
                                </motion.h1>
                                )}
                            </InView>           
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                <motion.p
                                ref={ref}
                                className="text-gray-600 text-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 4, y: 0 } : { opacity: 0, y: 20 }} // Efecto descendente
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                Nuestros muebles se caracterizan por ser únicos, ya que son mucho más que una pieza de diseño. Representan una diversidad de espacios llenos de sensaciones únicas en perfecta armonía con el lugar y su personalidad.
                                </motion.p>
                                )}
                            </InView>           
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                <motion.a
                                ref={ref}
                                href="/about"
                                className="flex justify-start w-fit text-primary text-base font-bold border-2 border-black rounded px-14 py-3 transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 4, y: 0 } : { opacity: 0, y: 20 }} // Efecto descendente
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                Ver más
                                </motion.a>
                                )}
                            </InView>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-room-categories" className="relative w-full h-[80vh] mt-16 overflow-hidden">
                <div className="relative h-full">
                    {categories.map((category) => (
                        <div
                        key={category.id}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${activeRoom === category.id ? "opacity-100" : "opacity-0"}`}
                        style={{
                            backgroundImage: `url(${category.image})`,
                            backgroundPosition: category.id === "01" ? "center 70%" :
                            category.id === "02" ? "center 78%" :
                            category.id === "03" ? "center 70%" :
                            category.id === "04" ? "center 70%" :
                            category.id === "05" ? "center 75%" : "center",
                        }}>
                        </div>
                    ))}
                    <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 space-y-4 text-gray-100"  style={{textShadow: "2px 2px 3px rgba(0, 0, 0, 0.8)"}}>
                        <div className="flex justify-between w-full max-w-4xl mx-auto">
                            {categories.map((category) => (
                                <motion.a
                                    key={category.id}
                                    href={category.url}
                                    onMouseEnter={() => setActiveRoom(category.id)}
                                    className={`text-lg md:text-xl font-semibold cursor-pointer transition-colors duration-300 ${activeRoom === category.id ? "text-primary" : "text-gray-900"}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {category.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Home;