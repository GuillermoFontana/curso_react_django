import Layout from "hocs/layouts/Layout";
import Equipo from "assets/img/about_equipo.jpg";
import Historia from "assets/img/about_historia.jpg";
import Socios from "assets/img/about_alianzas.jpg";


function About() {
  return (
    <Layout>
      <div className="py-28 px-6 max-w-5xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 border-b pb-2 border-gray-300">Acerca de nosotros</h1>

        <p className="mb-4 text-lg">
          Nacimos del encuentro entre el diseño, la artesanía y la convicción de que un mueble puede ser mucho más que un objeto funcional.
          Somos un equipo de amigos apasionados por la creación de piezas únicas, donde la estética, la comodidad y la prolijidad se combinan con materiales nobles y procesos conscientes.
        </p>

        <p className="mb-4 text-lg">
          Desde nuestros inicios, decidimos hacer las cosas de forma distinta:
        </p>

        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Diseñamos desde la sensibilidad.</li>
          <li>Construimos con respeto: por la materia prima, por quienes habitan los espacios y por el mundo que compartimos.</li>
          <li>Creemos en los detalles que no se ven pero se sienten.</li>
        </ul>

        <p className="mb-4 text-lg">
          Creamos cada mueble como si fuera el primero. Y el último.
          Buscamos que nuestras piezas hablen el lenguaje de la sencillez y el carácter, y que encuentren su lugar en hogares donde cada elemento tiene un propósito.
        </p>

        <p className="mb-6 text-lg">
          Más que llenar un espacio, queremos aportar significado.
          Nuestros muebles son una base para las historias que se viven alrededor de ellos:
          para compartir, para descansar, para sentir que ese lugar es verdaderamente tuyo.
        </p>

        <div className="text-2xl font-semibold italic mb-6 text-center text-gray-700">
          Diseñamos muebles que se sienten, se usan y se heredan.
        </div>

        <p className="mb-8 text-center text-lg">
          Para que tu casa se convierta en un hogar,<br />
          y ese hogar, en parte de tu historia.
        </p>

        <div className="flex justify-center space-x-8">
  {/* Botón 1 */}
  <a
    href="/nuestra-historia"
    className="group flex flex-col items-center bg-white text-black border rounded-xl overflow-hidden hover:bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-lg w-60"
  >
    <div className="w-full h-80 overflow-hidden">
      <img
        src={Historia}
        alt="Historia"
        className="w-full h-full object-cover object-[30%_center] transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="py-4 px-2 text-center">
      <span className="text-base font-medium">Conocé nuestra historia</span>
    </div>
  </a>

  {/* Botón 2 */}
  <a
    href="/nuestro-equipo"
    className="group flex flex-col items-center bg-white text-black border rounded-xl overflow-hidden hover:bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-lg w-60"
  >
    <div className="w-full h-80 overflow-hidden">
      <img
        src={Equipo}
        alt="Equipo"
        className="w-full h-full object-cover object-[35%_center] transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="py-4 px-2 text-center">
      <span className="text-base font-medium">Nuestro equipo</span>
    </div>
  </a>

  {/* Botón 3 */}
  <a
    href="/socios"
    className="group flex flex-col items-center bg-white text-black border rounded-xl overflow-hidden hover:bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-lg w-60"
  >
    <div className="w-full h-80 overflow-hidden">
      <img
        src={Socios}
        alt="Socios"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="py-4 px-2 text-center">
      <span className="text-base font-medium">Nuestros Socios</span>
    </div>
  </a>
</div>
      </div>
    </Layout>
  );
}

export default About;