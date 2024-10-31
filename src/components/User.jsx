import { Link } from "react-router-dom";

const User = ({user}) => {
    const {name, email,website,id} = user
    return (
        <div className="border-2 m-4 p-4 border-blue-600 rounded-md">
            <h5>{name}</h5>
            <h5>Email : {email}</h5>
            <p>website : {website}</p>
            <Link to={`/user/${id}`}><button className="px-2 py-1">Show Details</button></Link>
        </div>
    );
};

export default User;