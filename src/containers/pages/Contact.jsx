import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";

function Contact() {
    return (
    <Layout>
        <Navbar />
        <div className= "pt-28">
            <h1>Contacto!</h1>
        </div>
        <Footer />
    </Layout>
    );
}
export default Contact;