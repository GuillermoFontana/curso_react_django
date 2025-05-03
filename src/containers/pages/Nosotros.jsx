import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";

function Nosotros() {
    return (
    <Layout>
        <Navbar />
        <div classname= "pt-28">
            <h1>Nosotros!</h1>
        </div>
        <Footer />
    </Layout>
    );
}
export default Nosotros;