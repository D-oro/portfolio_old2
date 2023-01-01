import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar=()=>{

    return(
        <nav>
            <Link to="/" className="navlink">Home</Link>
            <Link to="/projects" className="navlink">Projects</Link>
            <Link to="/skills" className="navlink">Skills</Link>
            <Link to="/contact" className="navlink">Contact</Link>
        </nav>
    )
};
