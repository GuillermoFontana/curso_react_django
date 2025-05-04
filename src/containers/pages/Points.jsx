import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";

function Points() {
    return (
    <Layout>
        <Navbar />
        <div className= "pt-28">
            <h1>Puntos de Venta!</h1>
        </div>
        <Footer />
    </Layout>
    );
}
export default Points;