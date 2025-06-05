import Layout from "hocs/layouts/Layout";

function Contact() {
  return (
    <Layout>
      <section className="bg-transparent py-28 text-black text-center px-4 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 border-b pb-2 border-gray-300">Contactanos</h1>
          <div className="text-base font-sans leading-relaxed space-y-4">
            <p className="text-xl font-playfair">Boldcraft Design</p>
            <p>
              Calle Ficticia 123<br />
              City Bell, Buenos Aires<br />
              Argentina
            </p>
            <p>
  Teléfono:{" "}
  <a
    href="https://wa.me/2213522513"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    +5492213522513
  </a>
  <br />
  E-mail:{" "}
  <a
    href="mailto:info@boldcraft.com"
    className="text-blue-600 hover:underline"
  >
    info@boldcraft.com
  </a>
</p>
            <p>CUIT: 30-12345678-9</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;