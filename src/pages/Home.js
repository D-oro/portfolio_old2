import { Textsnippet } from "../components/Textsnippet";

export const Home=()=>{

    return(
       <main>
            <div clasName="homewrapper">
                <h1>Accessible Coding</h1>
                <Textsnippet text="Hello and welcome! This is the side project of a software developer passionate about accessible code!" />

                <Textsnippet text="This will be updated at irregular intervals to share my excitement, knowledge and learning around accessibility." />
                
            </div>
        </main>
    )
};

