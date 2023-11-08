import React from "react"
import useToggle from "../../hooks/useToggle"

const MenuContext = React.createContext()
export { MenuContext }



export default function Menu({ children, onOpen }) {
    const [menuState, setMenuState] = React.useState("Home")
    
    function handleClick(buttonValue) {
        setMenuState(buttonValue)
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
            <div className="renders">
                {menuState === "Badges" && 
                    <>
                        <h1>Badges</h1>
                        <p>fsdafds</p>
                    </>}
                {menuState === "Banners" && <h1>Banners</h1>}
                {menuState === "Cards" && <h1>Cards</h1>}
                {menuState === "Testimonials" && <h1>Testimonials</h1>}
                {menuState === "Home" && <h1>Home</h1>}
            </div>
        </>
    )
}
