import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full py-2 fixed z-50" style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img
                                src="https://media.ethnicraft.com/sys-master/s3_content_medias/h32/hec/8796120580126/Logo-Ethnicraft-RGB-Black.svg"
                                alt="Logo"
                                width={120}
                                height={40}
                                className="object-contain" 
                            />
                        </Link>
                    </div>

                    {/* Enlaces de navegación */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/puntos-de-venta" className="text-sm text-gray-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">Puntos de venta</NavLink>
                        <NavLink to="/sobre-nosotros" className="text-sm text-gray-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">Sobre nosotros</NavLink>
                        
                        {/* Menú desplegable para Productos */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <NavLink
                                to=""
                                className="text-sm text-neutral-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block"
                            >
                                Productos
                            </NavLink>                          
                            <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)'}}
                                className="absolute right-0.5 -translate-x-1/2 mt-4 bg-white shadow-xl overflow-hidden w-[720px] p-8 z-50 border border-gray-100"
                                >
                                    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">                                        
                                        {/* Dormitorio */}
                                        <div>
                                            <h3 className="text-base font-semibold text-neutral-800 mb-3">Dormitorio</h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <NavLink
                                                    to="/productos/dormitorio/mesas-de-luz"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Mesa de luz
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                    to="/productos/dormitorio/mesas-de-luz"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Cómoda
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                    to="/productos/dormitorio/respaldo"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Respaldo
                                                    </NavLink>
                                                </li>                                                
                                                <li>
                                                    <NavLink
                                                    to="/productos/dormitorio/taburete"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Taburete
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Living */}
                                        <div>
                                            <h3 className="text-base font-semibold text-neutral-800 mb-3">Living</h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <NavLink
                                                    to="/productos/living/sofa"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Sofá
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                    to="/productos/living/mesa"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Mesa de Living
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                    to="/productos/living/biblioteca"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Biblioteca
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Comedor */}
                                        <div>
                                            <h3 className="text-base font-semibold text-neutral-800 mb-3">Comedor</h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <NavLink
                                                    to="/productos/comedor/mesa"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Mesa
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                    to="/productos/comedor/silla"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Silla
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>                            
                                        {/* Estudio */}
                                        <div>
                                            <h3 className="text-base font-semibold text-neutral-800 mb-3">Estudio</h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <NavLink
                                                    to="/productos/estudio/escritorios"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Escritorios
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                    to="/productos/estudio/bibliotecas"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Bibliotecas
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>                              
                                        {/* Outdoor */}
                                        <div>
                                            <h3 className="text-base font-semibold text-neutral-800 mb-3">Outdoor</h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <NavLink
                                                    to="/productos/outdoor/sillas"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Sillas / Sillones / Banco
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                    to="/productos/outdoor/mesa"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Mesa
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                    to="/productos/outdoor/mesa-de-centro"
                                                    className="text-sm text-neutral-600 hover:text-black transition-colors"
                                                    >
                                                    Mesa de centro
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>                    
                                    </div>
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </div>
                        <NavLink to="/contacto" className="text-sm text-gray-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">Contacto</NavLink>
                        <NavLink to="/portal-de-socios" className="text-sm text-gray-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">Portal de Socios</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Navbar);