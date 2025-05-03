import React from "react";
import { connect } from "react-redux";

const navegation = {
    company: [
        { name: "Acerca de Audo Copenhagen", href: "/pages/about-audo" },
        { name: "Carrera", href: "/pages/career" },
        { name: "Contacto", href: "/pages/contact-us" },
        { name: "Política de cookies", href: "/pages/cookie-policy" },
        { name: "Informe de la Administración de Alimentos", href: "https://www.findsmiley.dk/660807" },
        { name: "Declaración", href: "https://presscloud.com/file/96/963443905568873/0._Declaration_of_conformity_ALL_2023.pdf" },
        { name: "Nuestra responsabilidad", href: "/pages/responsibility" },
        { name: "Plataforma de denuncia de irregularidades", href: "https://www.flosbebitaliagroup.com/ethics-and-businessconduct.html" },
    ],
    customerService: [
        { name: "Localizador de tiendas", href: "/pages/store-locator" },
        { name: "Visítanos", href: "/pages/visit-us" },
        { name: "Política de envíos", href: "/pages/shipping-policy" },
        { name: "Política de devoluciones", href: "/pages/return-policy" },
        { name: "Términos y condiciones", href: "/pages/terms-and-conditions" },
        { name: "Instrucciones de cuidado", href: "https://presscloud.com/file/65/655477028398859/Audo_Cph_Care_Instructions.pdf" },
        { name: "Política de privacidad", href: "/pages/privacy-policy" },
    ],
    professionals: [
        { name: "Portal en línea B2B", href: "https://b2b.audocph.com/" },
        { name: "Banco de imágenes", href: "https://audo.presscloud.com/digitalshowroom/#/gallery" },
        { name: "Programa de Tapicería", href: "https://presscloud.com/file/82/820837558972995/audo_upholstery_EU_2025.pdf" },
        { name: "Kit de prensa", href: "https://audo.presscloud.com/digitalshowroom/#/gallery" },
        { name: "Planificador de Revit y pCon", href: "/pages/revit-pcon-planner" },
        { name: "Archivos 2D, 3D y Revit", href: "https://audo.presscloud.com/digitalshowroom/#/gallery/2D-3D-Files" },
    ],
    newsletter: {
        text: "Manténgase conectado para recibir actualizaciones, eventos especiales y lanzamientos.",
        subscribeHref: "/pages/newsletter",
        social: [
            { name: "WhatsApp", href: "https://wa.me/5492213522513" },
            { name: "YouTube", href: "https://www.youtube.com/yourchannel" },
            { name: "TikTok", href: "https://www.tiktok.com/@yourprofile" },
            { name: "Facebook", href: "https://www.facebook.com/audocph" },
            { name: "Instagram", href: "https://www.instagram.com/audocph" },
            { name: "Pinterest", href: "https://www.pinterest.com/audocph" },
        ],
    },
};

function Footer() {
    return ( 
    <footer className="footer bg-brand text-black py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">                     
            <div>
                <h2 className="text-lg font-semibold mb-4">Compañía</h2>
                <ul className="space-y-2">
                    <li><a href="/pages/about-audo" className="text-sm hover:underline">Acerca de Audo Copenhagen</a></li>
                    <li><a href="/pages/career" className="text-sm hover:underline">Carrera</a></li>
                    <li><a href="/pages/contact-us" className="text-sm hover:underline">Contacto</a></li>
                    <li><a href="/pages/cookie-policy" className="text-sm hover:underline">Política de cookies</a></li>
                    <li><a href="https://www.findsmiley.dk/660807" className="text-sm hover:underline">Informe de la Administración de Alimentos</a></li>
                    <li><a href="https://presscloud.com/file/96/963443905568873/0._Declaration_of_conformity_ALL_2023.pdf" className="text-sm hover:underline">Declaración</a></li>
                    <li><a href="/pages/responsibility" className="text-sm hover:underline">Nuestra responsabilidad</a></li>
                    <li><a href="https://www.flosbebitaliagroup.com/ethics-and-businessconduct.html" className="text-sm hover:underline">Plataforma de denuncia de irregularidades</a></li>
                </ul>
            </div>          
            <div>
                <h2 className="text-lg font-semibold mb-4">Servicio al cliente</h2>
                <ul className="space-y-2">
                    <li><a href="/pages/store-locator" className="text-sm hover:underline">Localizador de tiendas</a></li>
                    <li><a href="/pages/visit-us" className="text-sm hover:underline">Visítanos</a></li>
                    <li><a href="/pages/shipping-policy" className="text-sm hover:underline">Política de envíos</a></li>
                    <li><a href="/pages/return-policy" className="text-sm hover:underline">Política de devoluciones</a></li>
                    <li><a href="/pages/terms-and-conditions" className="text-sm hover:underline">Términos y condiciones</a></li>
                    <li><a href="https://presscloud.com/file/65/655477028398859/Audo_Cph_Care_Instructions.pdf" class="text-sm hover:underline">Instrucciones de cuidado</a></li>
                    <li><a href="/pages/privacy-policy" className="text-sm hover:underline">Política de privacidad</a></li>
                </ul>
            </div>          
            <div>
                <h2 class="text-lg font-semibold mb-4">Profesionales</h2>
                <ul class="space-y-2">
                    <li><a href="https://b2b.audocph.com/" className="text-sm hover:underline">Portal en línea B2B</a></li>
                    <li><a href="https://audo.presscloud.com/digitalshowroom/#/gallery" className="text-sm hover:underline">Banco de imágenes</a></li>
                    <li><a href="https://presscloud.com/file/82/820837558972995/audo_upholstery_EU_2025.pdf" className="text-sm hover:underline">Programa de Tapicería</a></li>
                    <li><a href="https://audo.presscloud.com/digitalshowroom/#/gallery" className="text-sm hover:underline">Kit de prensa</a></li>
                    <li><a href="/pages/revit-pcon-planner" className="text-sm hover:underline">Planificador de Revit y pCon</a></li>
                    <li><a href="https://audo.presscloud.com/digitalshowroom/#/gallery/2D-3D-Files" className="text-sm hover:underline">Archivos 2D, 3D y Revit</a></li>
                </ul>
            </div>          
            <div>
                <h2 className="text-lg font-semibold mb-4">Hoja informativa</h2>
                <p className="text-sm mb-4">Manténgase conectado para recibir actualizaciones, eventos especiales y lanzamientos.</p>
                <a href="/pages/newsletter" className="button inline-block bg-black text-white px-20 py-3 rounded hover:bg-gray-800">Suscribir</a>
                <div className="flex gap-4 mt-6">
                    <a href="https://wa.me/5492213522513" aria-label="WhatsApp" className="hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                    </a>
                    <a href="https://www.facebook.com/audocph" aria-label="Facebook" className="hover:text-gray-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 768 768"><path d="M384,0C171.9,0,0,171.9,0,384s171.9,384,384,384,384-171.9,384-384S596.1,0,384,0Zm91,265.4h-57.7c-6.8,0-14.4,9-14.4,21v41.7h72.2l-10.9,59.4h-61.3v178.4h-68.1v-178.4h-61.8v-59.4h61.8v-35c0-50.2,34.8-90.9,82.6-90.9h57.7v63.2Z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/audocph" aria-label="Instagram" className="hover:text-gray-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 768 768"><path fill="currentColor" d="m539.9,266c-6.7-17.5-20.5-31.2-38-38-11.9-4.4-24.4-6.7-37.1-6.9-21.1-1-27.4-1.2-80.8-1.2s-59.7.2-80.8,1.2c-12.7.1-25.3,2.5-37.2,6.9-17.5,6.7-31.2,20.5-38,38-4.4,11.9-6.7,24.4-6.9,37.1-1,21.1-1.2,27.4-1.2,80.8s.2,59.7,1.2,80.8c.1,12.7,2.5,25.3,6.9,37.2,6.7,17.5,20.5,31.2,38,38,11.9,4.4,24.4,6.7,37.1,6.9,21.1,1,27.4,1.2,80.8,1.2s59.7-.2,80.8-1.2c12.7-.1,25.3-2.4,37.2-6.8,17.5-6.7,31.2-20.5,38-38,4.4-11.9,6.7-24.4,6.9-37.1,1-21.1,1.2-27.4,1.2-80.8s-.2-59.7-1.2-80.8c-.1-12.7-2.4-25.3-6.8-37.2h0Zm-155.9,220.7c-56.7,0-102.7-46-102.7-102.7s46-102.7,102.7-102.7,102.7,46,102.7,102.7h0c0,56.7-46,102.7-102.7,102.7Zm106.8-185.5c-13.3,0-24-10.7-24-24s10.7-24,24-24c13.3,0,24,10.7,24,24s-10.7,24-24,24h0Zm-40.1,82.8c0,36.8-29.9,66.7-66.7,66.7s-66.7-29.9-66.7-66.7,29.9-66.7,66.7-66.7,66.7,29.9,66.7,66.7h0ZM384,0C171.9,0,0,171.9,0,384s171.9,384,384,384,384-171.9,384-384S596.1,0,384,0h0Zm198.8,466.4c-.3,16.6-3.5,33-9.3,48.6-10.4,26.9-31.6,48.1-58.5,58.5-15.5,5.8-31.9,9-48.5,9.3-21.4,1-28.2,1.2-82.5,1.2s-61.1-.2-82.5-1.2c-16.6-.3-33-3.5-48.5-9.3-26.9-10.4-48.1-31.6-58.5-58.5-5.8-15.5-9-31.9-9.3-48.5-1-21.4-1.2-28.2-1.2-82.5s.2-61.1,1.2-82.5c.3-16.6,3.5-33,9.3-48.5,10.4-26.9,31.6-48.1,58.5-58.5,15.5-5.8,31.9-8.9,48.5-9.3,21.4-1,28.2-1.2,82.5-1.2s61.1.2,82.5,1.2c16.6.3,33,3.5,48.5,9.3,26.9,10.4,48.1,31.6,58.5,58.5,5.8,15.5,9,31.9,9.3,48.5,1,21.4,1.2,28.2,1.2,82.5s-.2,61.1-1.2,82.5h0Z"></path></svg>
                    </a>
                    <a href="https://www.pinterest.com/audocph" aria-label="Pinterest" className="hover:text-gray-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 768 768"><path d="M384 0C171.9 0 0 171.9 0 384s171.9 384 384 384 384-171.9 384-384S596.1 0 384 0zm16.3 535.3c-28.2-2.3-40-16.4-62.1-29.9-12 63.3-26.5 123.8-69.7 154.9-13.3-94 19.5-164.4 34.6-239.1-25.8-43.3 3.1-130.6 57.4-109.1 66.7 26.3-57.8 161.1 25.8 178.1 87.4 17.7 122.9-151.9 68.9-207.4-78.5-79.7-229.1-1.8-210.9 112.5 4.5 27.7 33.2 36.2 11.5 74.4-50-11-64.9-50.7-62.8-103.4 3-78.1 70.1-132.6 137.8-140 85.5-9.5 166.3 31.4 176.7 118.1 11.3 94.1-38.8 195.2-129.1 187z"/></svg>
                    </a>
                    <a href="https://www.youtube.com/yourchannel" aria-label="YouTube" className="hover:text-gray-600">
                        <svg className="w-6 h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.6-.9-2-1-2.8-.2-7-.2-7-.2s-4.2 0-7 .2c-.4 0-1.2.1-2 1-.6.7-.8 2.4-.8 2.4S4 8.2 4 10.2v1.6c0 2 .2 4 .2 4s.2 1.7.8 2.4c.8.8 1.9.7 2.4.8 1.7.2 7 .2 7 .2s4.2 0 7-.2c.4 0 1.2-.1 2-1 .6-.7.8-2.4.8-2.4s.2-2 .2-4V10c0-2-.2-3.8-.2-3.8zM9.8 14.6V9.3l5.8 2.7-5.8 2.6z"/>
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@yourprofile" aria-label="TikTok" className="hover:text-gray-600">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.7 2h3.1c.3 1.6 1.3 2.9 2.7 3.6.6.3 1.2.5 1.9.6v3.1c-1.5-.1-2.9-.6-4.2-1.5v6.6c0 3.8-3 6.8-6.8 6.8S2 18.3 2 14.5 5 7.7 8.8 7.7v3.1c-2.1 0-3.8 1.7-3.8 3.8S6.7 18.4 8.8 18.4s3.8-1.7 3.8-3.8V2z"/>
                        </svg>
                    </a>
                </div>
            </div>     
        </div>
        <div className="footer__content-bottom bg-white py-4 border-t">
            <div className="footer__bottom-info flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8">              
                <div className="footer__bottom-info--logo mb-4 sm:mb-0">
                    <img
                    src="//audocph.com/cdn/shop/files/audo_logo_black.svg?v=1684929392&amp;width=70"
                    alt="Audo Copenhague"
                    width="70"
                    height="27"
                    loading="lazy"
                    />
                </div>         
                <div className="footer__bottom-info--text text-sm text-center sm:text-left text-gray-600">
                    <div>
                    Bold-craft Design S.A., La Plata, Buenos Aires, Argentina<br />WP: +54 9 221-352-2513, <a href="mailto:info@bcdesign.com" className="underline">info@bcdesign.com</a>
                    </div>
                </div>
            </div>         
            <div className="footer__content-bottom-wrapper page-width mt-6 flex flex-wrap gap-4">
                <div className="footer__column footer__localization isolate w-full sm:w-1/2"></div>
                <div className="footer__column footer__column--info w-full sm:w-1/2"></div>
            </div>
        </div>
    </footer>
    );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Footer);