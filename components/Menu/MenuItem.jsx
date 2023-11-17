import React from "react"
import { MenuContext } from "../Menu/Menu"

export default function MenuItem({ children }) {
    const { handleClick } = React.useContext(MenuContext)

    return (
        <div className="menu-item" onClick={()=>handleClick(children)}>
            {children}
        </div>
    )
}