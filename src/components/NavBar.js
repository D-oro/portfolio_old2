import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar=()=>{

    return(
        <header>
            <nav>
                <Link to="/portfolio2.0" className="navlink">About</Link>
                <Link to="/projects" className="navlink">Projects</Link>
                <Link to="/skills" className="navlink">Skill Set</Link>
                <Link to="/contact" className="navlink">Contact</Link>
            </nav>
        </header>
    )
};
