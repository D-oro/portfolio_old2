import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Skills } from "./pages/Skills";

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
