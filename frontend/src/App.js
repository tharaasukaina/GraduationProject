import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feedback from './component/Feedback';
import Home from './component/Home';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './component/About';
import './App.css';


function App() {
  return (
    <div className="App">
     <Router>
       <div>
        
        <Navbar/>
        <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/home" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/feedback" element={<Feedback/>}/>
        
        </Routes>
        <Footer/>
      </div>
    </Router>
    
    </div>
  );
}

export default App;
