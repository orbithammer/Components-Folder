import React from "react"

let altMessage = ""

export default function Banner({title, status, children}) {
    if(status === "success") {
        altMessage = "checkmark icon"
    } else if(status === "warning") {
        altMessage = "exclamation mark icon"       
    } else if(status === "error") {
        altMessage = "'x' icon"       
    } else if(status === "neutral") {
        altMessage = "'i' icon"     
    } else {
        status = "missing"
        altMessage = "missing icon"
    }
    return (
        <div className={`banner banner-${status}`}>
            <img src={`./icons/${status}.svg`} alt={altMessage} />
            <div className="text-wrapper">
                <p className="banner-title">{title}</p>
                {children && <p className="banner-text">{children}</p>}
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