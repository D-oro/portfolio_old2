import './Accordion.css'

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
            <div id="1" hidden>
                <button onClick={collapseOne} className="arrow"> ⌃ </button>
                <p>blabla bla text that is not latin</p>
            </div>

            <button className="accordion" onClick={expandTwo}>Section 2</button>
            <div id="2" hidden>
                <button onClick={collapseTwo} className="arrow"> ⌃ </button>
                <p>blabla text</p>
            </div>

            <button className="accordion" onClick={expandThree}>Section 2</button>
            <div id="3" hidden>
                <button onClick={collapseThree} className="arrow"> ⌃ </button>
                <p>blabla text</p>
            </div>
        </div>
    )
};