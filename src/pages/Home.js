import { Textsnippet } from "../components/Textsnippet";

export const Home=()=>{

    let text = "hello there"
    return(
       <main>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9YJIx-vX5ig" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <Textsnippet text={text}/>
       </main>
    )
};