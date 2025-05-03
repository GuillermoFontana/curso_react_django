import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Home from 'containers/pages/Home';
import Error404 from 'containers/errors/Error404';

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
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
