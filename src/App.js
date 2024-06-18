import './App.css';
import Navbar from './components/navbar/navbar';
import ProductsList from './components/produts/products';
import MyHome from './components/myhome/myhome';
import ContactUs from './components/contactus/contactus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/aboutus/aboutus';

function App() {
  
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route  path='/' element={<MyHome />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
