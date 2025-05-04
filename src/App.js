import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Home from 'containers/pages/Home';
import Error404 from 'containers/errors/Error404';
import Points from 'containers/pages/Points';
import About from 'containers/pages/About';
import Distributors from 'containers/pages/Distributors';
import Contact from 'containers/pages/Contact';
import Partners from 'containers/pages/Partners';

function App() {
  return (
    <Provider store={store}>
      
    <Router>
      <Routes>
        {/* Error Display */}
        <Route path='*' element={<Error404 />} />

        {/* Home Display */}
        <Route path='/' element={<Home />} />

        {/* Other Routes */}
        <Route path='/puntos-de-venta' element={<Points />} />
        <Route path='/sobre-nosotros' element={<About />} />
        <Route path='/distribuidores' element={<Distributors />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/portal-de-socios' element={<Partners />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
