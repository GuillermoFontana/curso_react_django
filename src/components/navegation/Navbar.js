import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import logo from "assets/img/logo.png";

function Navbar() {
    return (
        <nav className="w-full py-1 fixed top-0 z-50 bg-white">
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
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Enlaces de navegación */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/venta" className="text-xs text-gray-700 hover:text-black">Puntos de venta</Link>
                        <Link to="/nosotros" className="text-xs text-gray-700 hover:text-black">Sobre nosotros</Link>
                        <Link to="/distribuidores" className="text-xs text-gray-700 hover:text-black">Distribuidores</Link>
                        <Link to="/contacto" className="text-xs text-gray-700 hover:text-black">Contacto</Link>
                        <Link to="/socios" className="text-xs text-gray-700 hover:text-black">Portal de Socios</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Navbar);