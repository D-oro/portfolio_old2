import { Hyperlink } from "../components/Hyperlink";

export const This=()=>{

    let hyperlink = "https://d-oro.github.io/portfolio"
    let linktext = "portfolio website"

    return(
       <main>
        <Hyperlink hyperlink={hyperlink} linktext={linktext}/>
       </main>
    )
};