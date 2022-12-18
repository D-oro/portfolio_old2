import './Image.css'
export const Image = (imageprop) =>{

    return(
        <img src={imageprop.image} alt={imageprop.alt}></img>
    )

};