import React from "react";
import { connect } from "react-redux";
import whatsapp from "../../assets/icons/whatsapp.png";
import instagram from "../../assets/icons/instagram.png";
import pinterest from "../../assets/icons/pinterest.png";
import youtube from "../../assets/icons/youtube.png";
import tiktok from "../../assets/icons/tiktok.png";

const navigation = {
    company: [
        { name: "Acerca de Bold-craft Design", href: "/nosotros" },
        { name: "Localizador de tiendas", href: "/localizador-de-tiendas" },
        { name: "Carreras", href: "/carreras" },
        { name: "Política de cookies", href: "/politica-de-cookies" },       
        { name: "Nuestra responsabilidad", href: "/nuestra-responsabilidad" },   
    ],
    customerService: [
        { name: "Contacto", href: "/contacto" },
        { name: "Política de envíos", href: "/shipping-policy" },
        { name: "Política de devoluciones", href: "/return-policy" },
        { name: "Términos y condiciones", href: "/terms-and-conditions" },
        { name: "Política de privacidad", href: "/privacy-policy" },
    ],
    professionals: [
        { name: "Distribuidores", href: "/distribuidores" },
        { name: "Galería de diseños", href: "/galeria-de-diseños" },
        { name: "Kit de prensa", href: "/kit-de-prensa" },
        { name: "Exposiciones", href: "/exposiciones" },
    ],
    newsletter: {
        text: "Manténgase conectado para recibir actualizaciones, eventos especiales y lanzamientos.",
        subscribeHref: "/portal-de-socios",
        social: [
            { name: "WhatsApp", href: "https://wa.me/5492213522513" },
            { name: "YouTube", href: "https://www.youtube.com/" },
            { name: "TikTok", href: "https://www.tiktok.com/@" },
            { name: "Facebook", href: "https://www.facebook.com/" },
            { name: "Instagram", href: "https://www.instagram.com/" },
            { name: "Pinterest", href: "https://www.pinterest.com/" },
        ],
    },
};

// Footer component
// Este componente representa el pie de página de la aplicación, que incluye enlaces a diferentes secciones del sitio web y redes sociales.
// Utiliza Redux para conectarse al estado global de la aplicación, aunque actualmente no se están utilizando props del estado.
// El pie de página está dividido en varias secciones: Compañía, Servicio al Cliente, Profesionales y Hoja informativa.
// Cada sección contiene una lista de enlaces que se generan dinámicamente a partir de un objeto de navegación.
// También incluye un área para suscribirse a un boletín informativo y enlaces a redes sociales.
// El pie de página tiene un diseño responsivo que se adapta a diferentes tamaños de pantalla utilizando clases de Tailwind CSS.
function Footer() {
    return (
        <footer className="footer bg-footer-bg text-black pt-12 pb-1" style={{ backgroundColor: 'rgb(192, 183, 176)' }}>
            <div className="content mx-16 my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Sección: Compañía */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Compañía</h2>
                    <ul className="space-y-2 text-xs">
                        {navigation.company.map((item, idx) => (
                            <li key={idx}>
                                <a href={item.href} className="text-xs text-gray-800 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sección: Servicio al Cliente */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Servicio al cliente</h2>
                    <ul className="space-y-2 text-xs">
                        {navigation.customerService.map((item, idx) => (
                            <li key={idx}>
                                <a href={item.href} className="text-xs text-gray-800 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sección: Profesionales */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Profesionales</h2>
                    <ul className="space-y-2 text-xs ">
                        {navigation.professionals.map((item, idx) => (
                            <li key={idx}>
                                <a href={item.href} className="text-xs text-gray-800 hover:text-black transition-transform duration-200 hover:scale-[1.03] inline-block">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sección: Newsletter + redes */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Hoja informativa</h2>
                    <p className="text-sm text-gray-800 mb-4">{navigation.newsletter.text}</p>
                    <a href={navigation.newsletter.subscribeHref} className="button inline-block bg-black text-white px-16 py-2 rounded transition-transform duration-200 hover:scale-[1.03] ">
                        Suscribir
                    </a>
                    <div className="flex gap-4 mt-5">
                        {navigation.newsletter.social.map((social, idx) => {
                            let icon;
                            switch (social.name.toLowerCase()) {
                                case "whatsapp": icon = whatsapp; break;
                                case "instagram": icon = instagram; break;
                                case "pinterest": icon = pinterest; break;
                                case "youtube": icon = youtube; break;
                                case "tiktok": icon = tiktok; break;
                                default: return null;
                            }
                            return (
                                <a key={idx} href={social.href} aria-label={social.name} className="hover:text-gray-600">
                                    <img src={icon} alt="" width={20} height={20} className="transition-transform duration-200 ease-in-out hover:scale-110" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Pie de página inferior */}
            <div className="footer__content-bottom pt-10 pb-12">
                <div className="footer__bottom-info flex flex-col items-center justify-between px-4 sm:px-8">
                    <div className="footer__bottom-info--logo mb-6">
                        <img
                            src="//audocph.com/cdn/shop/files/audo_logo_black.svg?v=1684929392&amp;width=70"
                            alt="Audo Copenhague"
                            width="70"
                            height="27"
                            loading="lazy"
                        />
                    </div>
                    <div className="footer__bottom-info--text text-xs text-center text-gray-600 ">
                        <div>
                            Bold-craft Design S.A., La Plata, Buenos Aires, Argentina<br />
                            WP: +54 9 221-352-2513, <a href="mailto:info@bcdesign.com" className="underline">info@bcdesign.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Footer);