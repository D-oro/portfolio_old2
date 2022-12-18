import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { This } from './pages/This';
import { That } from './pages/That';
import { Other } from './pages/Other';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/this" element={<This/>}/>
            <Route path="/that" element={<That/>}/>
            <Route path="/other" element={<Other />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
