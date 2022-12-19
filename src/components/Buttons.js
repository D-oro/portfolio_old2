import './Button.css'

export const Buttons = ({hyperlink, linktext}) =>{

    return(
        <div className="button-wrapper">
            <a href={hyperlink} className="button" target="_blank" rel="noreferrer noopener" style={{color: "darkblue"}}>{linktext}</a>
        </div>
    )
}