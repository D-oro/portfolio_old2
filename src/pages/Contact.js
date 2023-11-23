import './Contact.css'
import { Hyperlink } from '../components/Hyperlink';

export const Contact=()=>{

    return(
       <main>
            <section className="contact-section">
                <h1>Contact</h1>
                <p>Get in touch!</p>
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
            </section>
       </main>
    )
};