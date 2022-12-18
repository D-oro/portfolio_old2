import { Buttons } from "../components/Buttons";
import { Textsnippet } from '../components/Textsnippet';

export const Other=()=>{

    return(
       <main>
        <Textsnippet text="Get in touch!"/>
        <Buttons hyperlink="https://github.com/D-oro" linktext="Github"/>
        <Buttons hyperlink="https://www.linkedin.com/in/doro-hinrichs/" linktext="LinkedIn"/>
        <Buttons hyperlink="mailto:doro.codes@gmail.com" linktext="Email"/>
       </main>
    )
};