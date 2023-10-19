import React from "react"

export default function Badge({children, className, color}) {
    console.log(color)
    return (
        <div className={`badge ${className} badge-${color}`}>
            {children}
        </div>
    )
}