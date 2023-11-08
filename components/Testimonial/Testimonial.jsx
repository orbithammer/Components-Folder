import React from "react"

export default function Testimonial({children, img, name, jobTitle}) {
    let withImg = ""
    if(img) withImg = "-with-img"

    return(
        <div className={`testimonial${withImg}`}>
            {img ? 
                <img className="testimonialPortrait" src={img} />
                :
                <span className="workcationLogo">
                    <img src="../../icons/workcationIcon.svg" />
                    <img src="../../icons/work.svg" />
                    <img src="../../icons/cation.svg" />
                </span>
            }
            <div className="testimonialContentWrapper">
            {img ? 
                <>
                    <img className="testimonialQuoteIcon" src="../../icons/openQuote.svg" />
                    <p className="testimonialText">{children}</p>
                </>
                : 
                <p className="testimonialText">“{children}”</p>
            }
                <div className="testimonialNameTitle">
                    <span className="testimonialName">{name}</span>
                    <img className="testimonialDivider" src="../../icons/divider.svg" />
                    <span className="testimonialTitle">{jobTitle}</span>
                </div>
            </div>
        </div>
    )
}

// <div>
//                     <img className="testimonialPortrait" src="../../images/portraitMobile.png" />
//                     <img src="../../icons/openQuote.svg" />
//                 </div>