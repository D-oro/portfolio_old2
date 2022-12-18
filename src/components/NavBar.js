import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar=()=>{

    return(
        <nav>
            <Link to="/" className="navlink">Home</Link>
            <Link to="/this" className="navlink">This</Link>
            <Link to="/that" className="navlink">That</Link>
            <Link to="/other" className="navlink">Other</Link>
        </nav>
    )
};
