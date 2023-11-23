import { Link } from "react-router-dom";
import './NavBar.css';
import doroLogo from '../pictures/DoroLogo.png';

export const NavBar=()=>{

    return(
        <header>
            <a href="#main" className="skip-to-main-content-link">Skip to main content</a>
            <img src={doroLogo} alt="Doro logo" className="header-logo"/>
            <nav>
                <Link to="/portfolio2.0" className="navlink">About</Link>
                <Link to="/projects" className="navlink">Projects</Link>
                <Link to="/skills" className="navlink">Skill Set</Link>
                <Link to="/contact" className="navlink">Contact</Link>
            </nav>
        </header>
    )
};
