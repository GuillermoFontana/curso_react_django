import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";

function Distributors() {
    return (
    <Layout>
        <Navbar/>
        <div className= "pt-28">
            <h1>Distribuidores!</h1>
        </div>
        <Footer/>
    </Layout>
    );
}
export default Distributors;