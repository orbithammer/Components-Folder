import React from "react"

export default function Testimonial({children, img, name, jobTitle}) {
    let withImg = ""
    if(img) withImg = "-with-img"

    return(
        <div className={`testimonial${withImg}`}>
            {img ? 
                <img className="testimonial-portrait" src={img} alt="portrait" />
                :
                <span className="workcation-logo">
                    <img src="icons/workcationIcon.svg" />
                    <img src="icons/work.svg" />
                    <img src="icons/cation.svg" />
                </span>
            }
            <div className="testimonial-content-wrapper">
            {img ? 
                <>
                    <img className="testimonial-quote-icon" src="icons/openquote.svg" alt="quotation marks icon" />
                    <p className="testimonial-text">{children}</p>
                </>
                : 
                <p className="testimonial-text">“{children}”</p>
            }
                <div className="testimonial-name-title">
                    <span className="testimonial-name">{name}</span>
                    <img className="testimonial-divider" src="icons/divider.svg" alt="slash" />
                    <span className="testimonial-title">{jobTitle}</span>
                </div>
            </div>
        </div>
    )
}
