import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";

function Venta() {
    return (
    <Layout>
        <Navbar />
        <div classname= "pt-28">
            <h1>Venta!</h1>
        </div>
        <Footer />
    </Layout>
    );
}
export default Venta;