import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Routes>
            <Route path="/portfolio2.0" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </Router>

    </div>
  );
}

export default App;
