import Layout from "hocs/layouts/Layout";
import Contacto from "assets/img/contact.jpg";

function Contact() {
  return (
    <Layout>
      <div className="ContentPage3Template text-black">
        {/* Section1 - Título */}
        <section className="Section1 has-components text-center py-10 px-4">
          <h1 className="text-4xl font-bold">Contáctanos</h1>
          <div className="my-4 text-xl">_____________________________________________</div>
        </section>

        {/* Section2 - Descripción */}
        <section className="Section2 has-components text-center px-4 mb-10">
          <p className="max-w-2xl mx-auto text-base leading-relaxed">
            Nos encantaría saber de usted. Utilice el siguiente Teléfono o E-mail para ponerse en contacto con nosotros .
          </p>
        </section>

        {/* Sección combinada - Imagen + Info de contacto */}
        <section className="Section-ImagenContacto has-components flex flex-col md:flex-row justify-center items-center gap-10 px-4 mb-20">
          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Contacto}
              alt="Contacto"
              className="w-full max-w-md object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Línea divisoria para pantallas medianas en adelante */}
          <div className="hidden md:block w-px bg-gray-300 h-80"></div>

          {/* Información de contacto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Información de contacto</h2>
            <p className="text-lg mb-2 font-playfair">Boldcraft Design</p>
            <p className="mb-2">Calle Ficticia 123<br />City Bell, Buenos Aires, Argentina</p>
            <p className="mb-2">
              Teléfono:{" "}
              <a href="https://wa.me/2213522513" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                +54 9 221 352 2513
              </a>
            </p>
            <p className="mb-2">
              E-mail:{" "}
              <a href="mailto:info@boldcraft.com" className="text-blue-600 hover:underline">
                info@boldcraft.com
              </a>
            </p>            
          </div>
        </section>       
      </div>
    </Layout>
  );
}

export default Contact;