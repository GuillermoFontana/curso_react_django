import Layout from "hocs/layouts/Layout";

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

        <div className="flex justify-center space-x-4">
          <a
            href="/nuestra-historia"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Conocé nuestra historia
          </a>
          <a
            href="/nuestro-equipo"
            className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Nuestro equipo
          </a>
          <a
            href="/compromiso-animalista"
            className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Compromiso animalista
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default About;