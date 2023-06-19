import { NavLink as NavLinkComp } from "react-router-dom";
import style from "./NavLink.module.css";

function NavLink({to, children, ...props}) {
    return (
        <NavLinkComp to={to} className={({isActive})=> (isActive ? style.isActive : style.inActive)}>{children}</NavLinkComp>
    )
}

export default NavLink;