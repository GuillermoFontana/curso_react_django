import Navbar from 'components/navegation/Navbar';
import Footer from 'components/navegation/Footer'; // Ajustá la ruta si no es correcta
import { connect } from 'react-redux';


function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
        <header>
            <Navbar />
        </header>

        <main className="flex-grow">
            {children}
        </main>

        <Footer />
    </div>
    );
}

const mapStateToProps = (state) => {}


export default connect(mapStateToProps,{

}) (Layout);