import React from "react"

export default function Card({img, color, title, children}) {
    return (
        <div className={`card`}>
            <div className={`card-img-background ${color}`}>
                <img src={img} alt="icon" />
            </div>
            <div className="text-wrapper">
                <p className="card-title">{title}</p>
                <p className="card-description">{children}</p>
            </div>
        </div>
    )
}