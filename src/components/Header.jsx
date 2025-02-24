import { Link, NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>
            <div className="links">
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/chisiamo">Chi Siamo</NavLink>
                <NavLink to="/listaposts">Lista Posts</NavLink>
            </div>


        </>
    )

}