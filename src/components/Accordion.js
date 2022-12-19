import './Accordion.css'
import { Image} from './Image';
import first from '../pictures/first.png'
import { Textsnippet } from './Textsnippet';
import { Hyperlink } from './Hyperlink';

export const Accordion = () => {

    const expandOne = () =>{
        document.getElementById("1").hidden = false;
    }
    const collapseOne = () =>{
        document.getElementById("1").hidden = true;
    }

    const expandTwo = () =>{
        document.getElementById("2").hidden = false;
    }
    const collapseTwo = () =>{
        document.getElementById("2").hidden = true;
    }

    const expandThree = () =>{
        document.getElementById("3").hidden = false;
    }
    const collapseThree = () =>{
        document.getElementById("3").hidden = true;
    }

    return(
        <div className="accordion-wrapper">
            <button className="accordion" onClick={expandOne}>Section 1</button>
            <div id="1" hidden >
                <div className="expanded-accordion">
                <button onClick={collapseOne} className="arrow"> ⌃ </button>
                <Image alt="screenshot" image={first} />
                <Textsnippet text="blablablaaaa" />
                <Hyperlink hyperlink="https://d-oro.github.io/portfolio" linktext="→ portfolio website"/>
                </div>
            </div>

            <button className="accordion" onClick={expandTwo}>Section 2</button>
            <div id="2" hidden>
                <div className="expanded-accordion">
                <button onClick={collapseTwo} className="arrow"> ⌃ </button>
                <p>blabla text</p>
                </div>
            </div>

            <button className="accordion" onClick={expandThree}>Section 2</button>
            <div id="3" hidden>
                <div className="expanded-accordion">
                <button onClick={collapseThree} className="arrow"> ⌃ </button>
                <p>blabla text</p>
                </div>
            </div>
        </div>
    )
};