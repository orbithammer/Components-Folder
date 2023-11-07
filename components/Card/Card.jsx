import React from "react"

export default function Card({title, children}) {
    return (
        <div className="card">
            <div className="img-background">
                <img src="../../icons/cloud.svg" />
            </div>
            <div className="text-wrapper">
                <p className="card-title">{title}</p>
                <p className="card-description">{children}</p>
            </div>
        </div>
    )
}