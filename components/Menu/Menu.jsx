import React from "react"
import useToggle from "../../hooks/useToggle"
import Badge from "../../components/Badge/Badge"
import Banner from "../../components/Banner/Banner"

const MenuContext = React.createContext()
export { MenuContext }


export default function Menu({ children, onOpen, setComponentState }) {
    const [menuState, setMenuState] = React.useState("Home")

    function handleClick(buttonValue) {
        setComponentState(buttonValue)
        toggleOpen(false)
    }
    
    const [open, toggleOpen] = useToggle({
        initialValue: false, 
        onToggle: onOpen
    })

    return (
        <>
            <MenuContext.Provider value={{ open, toggleOpen, handleClick }}>
                <div className="menu">
                    {children}
                </div>
            </MenuContext.Provider>
        </>
    )
}