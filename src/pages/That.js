import './That.css'
import { Image } from '../components/Image';
import { Textsnippet } from '../components/Textsnippet';
import image from '../pictures/first.png'
import second from '../pictures/second.png'
import { Hyperlink } from '../components/Hyperlink';

export const That=()=>{

    const alt = "first screenshot"
    const text = "snippet text"

    let hyperlink = "https://d-oro.github.io/portfolio"
    let linktext = "portfolio website"

    return(
       <main>
            <div className="bar">
                <Image alt={alt} image={image}/>
                <Textsnippet text={text}/>
                <Hyperlink hyperlink={hyperlink} linktext={linktext}/>
            </div>
            <div className="bar">
                <Image alt={alt} image={second}/>
                <Textsnippet text={text}/>
                <Hyperlink hyperlink={hyperlink} linktext={linktext}/>
            </div>
       </main>
    )
};