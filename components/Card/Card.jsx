import React from "react"

export default function Card({children, title}) {
    return (
        <div className="card">
            <div className="img-background">
                <img src="../../icons/cloud.svg" />
            </div>
            <div className="text-wrapper">
                <div className="card-title">{title}</div>
                <div className="card-description">{children}</div>
            </div>
        </div>
    )
}