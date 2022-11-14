import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Box } from './components/Box';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
// import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Newsletter/>
    <Box/>
    <Footer/>
    </>
  );
}

export default App;
