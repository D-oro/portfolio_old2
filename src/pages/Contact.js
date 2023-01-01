import './Contact.css'
import { Hyperlink } from '../components/Hyperlink';
import { Textsnippet } from '../components/Textsnippet';

export const Contact=()=>{

    return(
       <main>
            <Textsnippet text="Get in touch!" />
            <div className="box">
                <div className="square">
                <Hyperlink hyperlink= "https://www.linkedin.com/in/doro-hinrichs/" linktext= "LinkedIn" />
                </div>
                <div className="square">
                <Hyperlink hyperlink= "https://github.com/D-oro" linktext= "Github" />
                </div>
                <div className="square">
                <Hyperlink hyperlink="mailto:doro.codes@gmail.com" linktext= "Email" />
                </div>
            </div>
       </main>
    )
};