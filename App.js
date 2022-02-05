import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Componets/Header/Navbar';
import Footer from './Componets/Footer/Footer';
import "./Assets/css/style.css"

import Index from './Componets/Pages/Index';

function App() {
  return (
    <>
      <Navbar />
      <Index />
      <Footer />
    </>
  );
}

export default App;
