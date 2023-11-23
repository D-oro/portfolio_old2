import './Hyperlink.css'

export const Hyperlink = ({hyperlink, linktext, textcolor}) =>{

    return(
        <a href={hyperlink} className="hyperlink" style={{color: textcolor}}>{linktext}</a>
    )
}