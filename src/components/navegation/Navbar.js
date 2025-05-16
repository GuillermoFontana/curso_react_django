import { connect } from "react-redux";
import { NavLink,Link } from "react-router-dom";
// import logo from "assets/img/logo.png";

function Navbar() {
    return (
            <nav className="w-full py-1 fixed z-50" style={{ backgroundColor: 'rgb(192, 183, 176)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <img
                                    // src={logo}
                                    src="https://media.ethnicraft.com/sys-master/s3_content_medias/h32/hec/8796120580126/Logo-Ethnicraft-RGB-Black.svg"
                                    alt="Logo"
                                    width={120}
                                    height={40}
                                    className="object-contain" />
                            </Link>
                        </div>

                        {/* Enlaces de navegación */}
                        <div className="hidden md:flex items-center space-x-6">
                            <NavLink to="/puntos-de-venta" className="text-xs text-gray-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">Puntos de venta</NavLink>
                            <NavLink to="/sobre-nosotros" className="text-xs text-gray-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">Sobre nosotros</NavLink>
                            <NavLink to="/distribuidores" className="text-xs text-gray-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">Distribuidores</NavLink>
                            <NavLink to="/contacto" className="text-xs text-gray-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">Contacto</NavLink>
                            <NavLink to="/portal-de-socios" className="text-xs text-gray-700 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">Portal de Socios</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
    );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Navbar);