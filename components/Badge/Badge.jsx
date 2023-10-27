import React from "react"

export default function Badge({children, shape, color}) {
    return (
        <div className={`badge ${shape} badge-${color}`}>
            {children}
        </div>
    )
}