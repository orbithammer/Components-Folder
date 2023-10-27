import React from "react"

let bannerIcon = "<missing>"
let title = "MISSING"
let altMessage = title

export default function Banner({children, status}) {
    if(status === "success") {
        title = "Congratulations"
        altMessage = "checkmark icon"
    }
    if(status === "warning") {
        title = "Attention" 
        altMessage = "exclamation mark icon"       
    }
    if(status === "error") {
        title = "There is a problem with your application" 
        altMessage = "'x' icon"       
    }
    if(status === "neutral") {
        title = "Update available"   
        altMessage = "'i' icon"     
    }
    return (
        <div className={`banner banner-${status}`}>
            <img src={`../../icons/${status}.svg`} alt={altMessage} />
            <div className="text-wrapper">
                <div className="banner-title">{title}</div>
                {children && <div className="banner-text">{children}</div>}
            </div>
        </div>
    )
}

// return (
//         <div className={`banner banner-${status}`}>
//             <i className="bannerIcon">{bannerIcon}</i>
//             <div className="textWrapper">
//                 <h3>{heading}</h3>
//                 <p>{children}</p>
//             </div>
//         </div>
//     )