import { NavLink } from "react-router-dom"
import "./header.css"

export const Header = () => {
    return (
        <header>
            <div className="inner__header">
                <NavLink className={({isActive}) => isActive ? "active-nav" : "nav"} to={"/"}>Все котики</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-nav" : "nav"} to={"cats-favorite"}>Любимые котики</NavLink>
            </div>
        </header>
    )
}