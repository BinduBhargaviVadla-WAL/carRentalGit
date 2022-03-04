import logo from './logo.svg';
import './App.css';
import SimpleTable from './SimpleTable';
import Contact from './CarRentalApp/Contact';
import Employee from './CarRentalApp/Employee';
import Home from './CarRentalApp/Home';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import About from "./CarRentalApp/About";
import SimpleMap from './SimpleMap';
import Employees from './CarRentalApp/Employees';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/employee">Employee</Link></li>
      </ul>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<Employees />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;