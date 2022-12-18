import './Hyperlink.css'

export const Hyperlink = ({hyperlink, linktext}) =>{

    return(
        <a href={hyperlink} className="hyperlink" target="_blank" rel="noreferrer noopener">{linktext}</a>
    )
}