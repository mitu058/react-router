import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Nabar</h2>
            <nav>
                <Link className="mr-3" to="/">Home</Link>
                <Link className="mr-3" to="/about">About</Link>
                <Link className="mr-3" to="/users">Users</Link>
                <Link className="mr-3" to="/posts">Posts</Link>
                <Link className="mr-3" to="/contact">Contact</Link>
               
            </nav>
        </div>
    );
};

export default Header;