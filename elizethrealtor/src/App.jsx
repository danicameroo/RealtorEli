import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './router/Navbar/Navbar';
import InmueblesList from './router/InmueblesList/InmueblesList';
import QuienSoy from './router/QuienSoy/QuienSoy';
import Inmueble from './router/inmueble/Inmueble';
import Background from './components/Background/Background';
import Footer from './router/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Background/>
      <Navbar />
        <Routes>
          <Route path='/' element={<InmueblesList />} />
          <Route path='/inmueble/:id' element={<Inmueble />} />
          <Route path='/quiensoy' element={<QuienSoy />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;