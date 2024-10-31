import {  NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Nabar</h2>
            <nav>
                <NavLink className="mr-3" to="/">Home</NavLink>
                <NavLink className="mr-3" to="/about">About</NavLink>
                <NavLink className="mr-3 " to="/users">Users</NavLink>
                <NavLink className="mr-3" to="/posts">Posts</NavLink>
                <NavLink className="mr-3" to="/contact">Contact</NavLink>
               
            </nav>
        </div>
    );
};

export default Header;